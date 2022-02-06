import React from 'react';
import './Admin.css'

// React Hook Form
import { useForm } from "react-hook-form"

const Admin = () => {
    return(
        <div className='adminPage-container'>
            <div className='container'>
                <h1>Ingreso de productos</h1>
                <form action="" className='admin-form' >
                    <label>Ingrese el nombre</label>
                    <input type="text" />
                    <label>Ingrese el precio</label>
                    <input type="number" />
                    <label>Ingrese la </label>
                    <input type="file" />
                </form>
            </div>
        </div>
    )
}

export default Admin 