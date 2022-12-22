import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'

export const UserHomePage = (props) => {
    const [searchValue,setSearchValue] = useState('')

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
                      </tr>
                    )
                })
            }
          </tbody>
        </Table>
        </div>
      )
}
