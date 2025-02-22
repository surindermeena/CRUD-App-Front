import React from 'react'

export default function Comm(props) {
  return (
    <div className='container-fluid p-5'>
        {(props.pageHeading=="Home") && <h1>Home Page</h1>}
        {(props.pageHeading=="About") && <h2>Inventory Management System - MERN CRUD App</h2>}
        <p>Go to Products Page.</p>
    </div>
  )
}
