import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/Login";
import Register from "./components/Register"
import Content from "./components/content"
import Clips from "./components/clips"
import AllClips from "./components/allClips"
import Nav from "./components/Nav";
const App = () => {
  return (
    <div>
      <Nav />
      <div style={{ margin: 20}}>
      <Routes>
      <Route path="/" element={<Content/>}/>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create/:id" element={<Create />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/clips/:id" element={<Clips/>}/>
        <Route path="/allClips" element={<AllClips/>}/>

      </Routes>
      </div>
    </div>
  );
};

export default App;
