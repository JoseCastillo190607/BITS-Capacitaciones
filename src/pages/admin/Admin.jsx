import {Link} from 'react-router-dom';
import React from './admin.css';
import {PermIdentity, MailOutline, WorkOutline, Publish} from '@mui/icons-material'


export default function Admin() {
  return (
    <div className='admin'>
      <div className="adminTitleContainer">
        <h1 className="adminTitle">Editar Administrador</h1>
        <Link to="/newAdmins" className='Link'>
        <button className="adminAddButton">Agregar</button>
        </Link>
        </div> 
        <div className="adminContainer">
            <div className="adminShow">
                <div className="adminShowTop">
                    <img src="https://www.certus.edu.pe/blog/wp-content/uploads/2019/11/certus-en-que-puede-trabajar-administrador-empresas-1200x720.jpg" alt="" 
                
                    className='adminShowImg'/>
                    <div className="adminShowTopTitle">
                        <span className="adminShowName">Juanito Perez</span>
                        <span className="adminShowAdminTitle">Administrador Gerencia</span>
                    </div>
                </div>
              <div className="adminShowButton">
                <span className="adminShowTitle">Cuenta</span>
                <div className="adminShowInfo">
                <PermIdentity className='adminShowIcon'/>
                <span className="adminShowInfoTitle">Admin123</span>
              </div>
              <div className="adminShowInfo">
                <WorkOutline className='adminShowIcon'/>
                <span className="adminShowInfoTitle">Gerencia</span>
              </div>
              <span className="adminShowTitle">Contacto</span>
              <div className="adminShowInfo">
               <MailOutline className='adminShowIcon'/>
                <span className="adminShowInfoTitle">Admin@gmail.com</span>
              </div>
              </div>
            </div>
          <div className="adminUpDate">
          <span className="adminUpDateTitle">Editar</span>
          <form action="" className="adminUpDateForm">
            <div className="adminUpDateLeft">
            <div className="adminUpDateItem">
                <label>Nombre </label>
                <input type="text" placeholder='Juanito' 
                className='adminUpDateInput'/>
              </div>
              <div className="adminUpDateItem">
                <label>Apellido</label>
                <input type="text" placeholder='Perez' 
                className='adminUpDateInput'/>
              </div>
              <div className="adminUpDateItem">
                <label>Nombre de Usuario</label>
                <input type="text" placeholder='Admin123' 
                className='adminUpDateInput'/>
              </div>
              <div className="adminUpDateItem">
                <label>Puesto </label>
                <input type="text" placeholder='Gerencia' 
                className='adminUpDateInput'/>
              </div>
              <div className="adminUpDateItem">
                <label>Correo </label>
                <input type="email" placeholder='Admin123@gmail.com' 
                className='adminUpDateInput'/>
              </div>
            </div>
            <div className="adminUpDateRight">
              <div className="adminUpDateUpload">
                <img className='adminUpDateImg' src="https://www.certus.edu.pe/blog/wp-content/uploads/2019/11/certus-en-que-puede-trabajar-administrador-empresas-1200x720.jpg" alt="" />
                <label htmlFor="file"><Publish className='adminUpDateIcon'/></label>
                <input type="file" id='file' style={{display: "none"}}/>
              </div>
              <button className="adminUpDateButton">Actualizar</button>
            </div>
          </form>
          </div>
        </div>
    </div>
  )
}
