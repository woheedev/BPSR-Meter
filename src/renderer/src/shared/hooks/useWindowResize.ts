import { useEffect, useRef, useState } from "react";
import { setItem, getItem } from "../../shared/utils/localStorage";

type ResizeDirection =
    | "top" | "bottom" | "left" | "right"
    | "top-left" | "top-right" | "bottom-left" | "bottom-right";

type WindowType = "main" | "group" | "history" | "device" | "settings" | "monsters";

export function useWindowResize(windowType: WindowType) {
    const [isResizing, setIsResizing] = useState(false);
    const resizeStateRef = useRef<{
        direction: ResizeDirection;
        startX: number;
        startY: number;
        startWidth: number;
        startHeight: number;
        startWindowX: number;
        startWindowY: number;
    } | null>(null);

    const handleResizeStart = (e: React.PointerEvent<HTMLDivElement>, direction: ResizeDirection) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setIsResizing(true);

        window.electron.setIgnoreMouseEvents(false);

        const startX = e.screenX;
        const startY = e.screenY;

        window.electron.getWindowPosition().then((position: { x: number; y: number; width: number; height: number }) => {
            resizeStateRef.current = {
                direction,
                startX,
                startY,
                startWidth: position.width,
                startHeight: position.height,
                startWindowX: position.x,
                startWindowY: position.y,
            };
        });
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing || !window.electron || !resizeStateRef.current) return;

            e.preventDefault();

            const { direction, startX, startY, startWidth, startHeight, startWindowX, startWindowY } = resizeStateRef.current;
            const deltaX = e.screenX - startX;
            const deltaY = e.screenY - startY;

            let newWidth = startWidth;
            let newHeight = startHeight;
            let newX = startWindowX;
            let newY = startWindowY;

            // Calculate new dimensions based on direction
            switch (direction) {
                case "right":
                    newWidth = startWidth + deltaX;
                    break;
                case "left":
                    newWidth = startWidth - deltaX;
                    newX = startWindowX + deltaX;
                    break;
                case "bottom":
                    newHeight = startHeight + deltaY;
                    break;
                case "top":
                    newHeight = startHeight - deltaY;
                    newY = startWindowY + deltaY;
                    break;
                case "bottom-right":
                    newWidth = startWidth + deltaX;
                    newHeight = startHeight + deltaY;
                    break;
                case "bottom-left":
                    newWidth = startWidth - deltaX;
                    newHeight = startHeight + deltaY;
                    newX = startWindowX + deltaX;
                    break;
                case "top-right":
                    newWidth = startWidth + deltaX;
                    newHeight = startHeight - deltaY;
                    newY = startWindowY + deltaY;
                    break;
                case "top-left":
                    newWidth = startWidth - deltaX;
                    newHeight = startHeight - deltaY;
                    newX = startWindowX + deltaX;
                    newY = startWindowY + deltaY;
                    break;
            }

            // Apply minimum sizes
            newWidth = Math.max(newWidth, 400);
            newHeight = Math.max(newHeight, 300);

            // If we're resizing from left or top, adjust position
            if (direction.includes("left") || direction.includes("top")) {
                window.electron.setWindowPosition(windowType, newX, newY);
            }

            setItem(`${windowType}.width`, Math.ceil(newWidth));
            setItem(`${windowType}.height`, Math.ceil(newHeight));

            window.electron.resizeWindow(windowType, Number(newWidth), Number(newHeight));
        };

        const handleMouseUp = () => {
            if (isResizing) {
                window.electron.saveWindowSize(
                    windowType,
                    Number(getItem(`${windowType}.width`)),
                    Number(getItem(`${windowType}.height`)),
                    Number(getItem(`${windowType}.scale`, 1)),
                );
                setIsResizing(false);
                resizeStateRef.current = null;
            }
        };

        if (isResizing) {
            window.addEventListener("mousemove", handleMouseMove, true);
            window.addEventListener("mouseup", handleMouseUp, true);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove, true);
            window.removeEventListener("mouseup", handleMouseUp, true);
        };
    }, [isResizing]);

    return {
        isResizing,
        handleResizeStart,
    };
}
