import { Route, Routes } from "react-router";
import Lobby from "./features/lobby/screen";
import Game from "./features/game/screen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
