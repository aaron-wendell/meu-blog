import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../src/components/Menu";
import UserList from "../src/components/UserList";
import PostList from "../src/components/PostList";
import Sobre from "./components/Sobre";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" element={<PostList/>} />
          <Route path="/UserList" element={<UserList/>} />
          <Route path="/Sobre" element={<Sobre/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
