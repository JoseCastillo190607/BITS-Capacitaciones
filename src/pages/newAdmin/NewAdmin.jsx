import './newAdmin.css'

export default function NewAdmin() {


  // const [ ]

  return (
    <div className='newAdmin'>
      <h1 className="newAdminTitle">Nuevo Administrador</h1>
      <form className='newAdminForm'> 
        <div className="newAdminItem">
          <label>Nombre</label>
          <input type="text" placeholder='juanito' />
        </div>
        <div className="newAdminItem">
          <label>Apellido</label>
          <input type="text" placeholder='Perez' />
        </div>
        <div className="newAdminItem">
          <label>Nombre de Usuario</label>
          <input type="text" placeholder='Admin765' />
        </div>
        <div className="newAdminItem">
          <label>Puesto</label>
          <input type="text" placeholder='Software Ingenier' />
        </div>
        <div className="newAdminItem">
          <label>Correo</label>
          <input type="email" placeholder='Admin765@gmail.com' />
        </div>
        <div className="newAdminItem">
          <label>Contraseña</label>
          <input type="password" placeholder='password' />
        </div>
        <div className="newAdminItem">
          <label >Activo</label>
        <select className='newAdminSelect' name="active" id="active">
          <option value="yes">Si</option>
          <option value="No">No</option>
        </select>
        </div>
        <button className="newAdminButton">Crear</button>
      </form>
    </div>
  )
}
