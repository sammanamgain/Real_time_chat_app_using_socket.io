import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import Chatpage from "./Pages/ChatPage";

function App() {
  console.log("app isnot rendering")
  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/chat' element={<Chatpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
