
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/Home";
import AdminList from "./pages/adminList/AdminList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./pages/admin/Admin";
import NewAdmin from "./pages/newAdmin/NewAdmin";
import CursosList from "./pages/cursosList/CursosList";
import CursosMasDestacados from "./pages/cursosMasDestacados/CursosMasDestacados";
import CursosMenosDestacados from "./pages/cursosMenosDestacados/CursosMenosDestacados";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const url="http://localhost:8080//usuarios"

function App() {

  const [load,setload] = useState ([]);


  const loadData = () => {
    axios.get('http://localhost:8080/api/usuarios/listar')
    .then(res=>{
      console.log(res.data)
    })
  }

  useEffect(loadData, [load]);

  return (
      <BrowserRouter>
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/adminList" element={<AdminList/>}/>
              <Route path="/adminList/:adminId" element={<Admin/>}/>
              <Route path="/newAdmins" element={<NewAdmin/>}/>
              <Route path="/cursos" element={<CursosList/>}/>
              <Route path="/cursos+Des" element={<CursosMasDestacados/>}/>
              <Route path="/cursos-Des" element={<CursosMenosDestacados/>}/>
            </Routes>
        </div>
      </div>
      </BrowserRouter>

  );
}


export default App;
