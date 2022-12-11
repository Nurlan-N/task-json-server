import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

export const HomePage = (props) => {
  const [value,setValue] = useState('')
  const [searchValue,setSearchValue] = useState('')

  const deleteHandler = async (e) =>{
    setValue(e.target.value);
    await axios.delete(`http://localhost:3003/users/${value}`);

    window.location.reload(false);
  }
  const InputHandler = (e) =>{
    setSearchValue(e.target.value)
  }

  const filteredUsers = props.userList.filter(user => user.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <div>
              <input onChange={InputHandler} type="text" placeholder='Search' className='form-control w-50  my-3 mx-auto' />
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
            filteredUsers.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td><button value={user.id} onClick={deleteHandler} className='btn btn-danger'>Delete</button></td>
                  </tr>
                )
            })
        }
      </tbody>
    </Table>
    </div>
  )
}
