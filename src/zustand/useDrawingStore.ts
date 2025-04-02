import { create } from "zustand";
import { persist } from "zustand/middleware";

type Tool = "brush" | "eraser" | "rectangle" | "text";

interface Path {
    color: string;
    brushSize: number;
    startX: number;
    startY: number;
    points: [number, number][];
    userId: string;
    timestamp: number;
    isVisible: boolean;
}

interface DrawingPanel {
    canvasId: string;
    isLocal: boolean;
    width: number;
    height: number;
    context: CanvasRenderingContext2D | null;
    availableColors: string[];
    selectedColor: string;
    brushSize: number;
    activeTool: Tool;
    paths: Path[];
    users: string[];
    isDrawing: boolean;
    error?: string;

    setError: (error: string | null) => void;
    setContext: (ctx: CanvasRenderingContext2D | null) => void;
    setSelectedColor: (color: string) => void;
    setBrushSize: (size: number) => void;
    setActiveTool: (tool: Tool) => void;
    addPath: (path: Path) => void;
    addRemotePath: (path: Path) => void;
    resizeCanvas: (width: number, height: number) => void;
    clearCanvas: () => void;
    redrawCanvas: () => void;
    undo: () => void;
    redo: () => void;
    addUser: (userId: string) => void;
    removeUser: (userId: string) => void;
}

const useDrawingStore = create()(
    persist((set) => {

    }, {
        name: "drawingStore",
    }),
);
