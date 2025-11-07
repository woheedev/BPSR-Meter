export default function ResizeHandle({ handleResizeStart }: { handleResizeStart: (e: React.PointerEvent, direction: string) => void }): React.JSX.Element {
    return (
        <>
            <div className="resize-handle resize-handle-top" onPointerDown={(e) => handleResizeStart(e, "top")} />
            <div className="resize-handle resize-handle-bottom" onPointerDown={(e) => handleResizeStart(e, "bottom")} />
            <div className="resize-handle resize-handle-left" onPointerDown={(e) => handleResizeStart(e, "left")} />
            <div className="resize-handle resize-handle-right" onPointerDown={(e) => handleResizeStart(e, "right")} />
            <div className="resize-handle resize-handle-corner-tl" onPointerDown={(e) => handleResizeStart(e, "top-left")} />
            <div className="resize-handle resize-handle-corner-tr" onPointerDown={(e) => handleResizeStart(e, "top-right")} />
            <div className="resize-handle resize-handle-corner-bl" onPointerDown={(e) => handleResizeStart(e, "bottom-left")} />
            <div className="resize-handle resize-handle-corner-br" onPointerDown={(e) => handleResizeStart(e, "bottom-right")} />
        </>
    );
}
