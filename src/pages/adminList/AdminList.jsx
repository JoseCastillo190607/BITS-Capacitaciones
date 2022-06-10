import './adminList.css'
import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import {Adminrows} from '../../adminData'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AdminList() {
  const [data,setData] = useState(Adminrows);

  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstname', headerName: 'Nombre', width: 130 },
    { field: 'lastname', headerName: 'Apellido', width: 130 },
    { field: 'Username', headerName: 'Usuario', width: 130, renderCell: (params)=> {
      return (
        <div className='adminListAdmin'>
          <img className='adminListImg' src="{params.row.avatar} "  alt="" />
          {params.row.Username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Correo', width: 200 },
    { field: 'area', headerName: 'Puesto', width: 130 },
    {
      field: 'status',
      headerName: 'status',
      width: 130,
    },
    { field: 'action', 
    headerName: 'Accion', 
    width: 130, 
    renderCell: (params)=> {
      return (
        <>
            <Link to={"/adminList/"+params.row.id}>
            <button className='adminListEdit'>Editar</button>
            </Link>
            <Delete className='adminListDelete' onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }},
  ];

  return (
    <div className='adminList'>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}
