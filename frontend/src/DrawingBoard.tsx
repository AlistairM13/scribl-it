// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   ReactSketchCanvas,
//   ReactSketchCanvasRef,
//   CanvasPath,
// } from "react-sketch-canvas";
// import GameManager from "../utils/gameManager";
// import { useGameStore } from "../stores/gameStore";
// import { useShallow } from "zustand/shallow";

// const DrawingBoard: React.FC = () => {
//   const [player, roomId] = useGameStore(
//     useShallow((state) => [state.playerName, state.roomId])
//   );
//   const canvasRef = useRef<ReactSketchCanvasRef>(null);
//   const timeoutRef = useRef<number>(null!);
//   const [isLocalDrawing, setIsLocalDrawing] = useState(false);

//   const handleDrawing = useCallback(
//     (paths: CanvasPath[]) => {
//       // Only send drawing if it's a local drawing action
//       if (paths.length > 0 && !isLocalDrawing) {
//         if (timeoutRef.current) {
//           clearTimeout(timeoutRef.current);
//         }

//         timeoutRef.current = setTimeout(async () => {
//           GameManager.getInstance().sendMessage({
//             type: "DRAW",
//             roomId,
//             name: player,
//             payload: paths[paths.length - 1],
//           });
//         }, 300); // Reduced timeout for more responsive drawing
//       }

//       // Reset the local drawing flag
//       setIsLocalDrawing(false);
//     },
//     [player, roomId, isLocalDrawing]
//   );

//   useEffect(() => {
//     const drawCallback = async (data: any) => {
//       const { payload: recentChange, name: drawingPlayer } = data as {
//         name: string;
//         payload: CanvasPath;
//       };

//       if (!recentChange || drawingPlayer === player) return;

//       // Prevent triggering onChange when loading paths
//       setIsLocalDrawing(true);

//       const currentState = await canvasRef.current?.exportPaths();
//       if (!currentState) {
//         canvasRef.current?.loadPaths([recentChange]);
//       } else {
//         canvasRef.current?.loadPaths([...currentState, recentChange]);
//       }
//     };

//     GameManager.getInstance().registerCallback("DRAW", drawCallback);

//     // Cleanup callback on unmount
//     return () => {
//       GameManager.getInstance().deRegisterCallback("DRAW");
//     };
//   }, [player]);

//   return (
//     <ReactSketchCanvas
//       ref={canvasRef}
//       width={`${window.innerWidth * 0.6 - 32}px`}
//       height={`${window.innerHeight - 32}px`}
//       strokeWidth={4}
//       onChange={handleDrawing}
//       strokeColor="red"
//     />
//   );
// };

// export default DrawingBoard;
