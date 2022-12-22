import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Modal } from '../components/Modal';

export const HomePage = (props) => {
  const [value,setValue] = useState('');
  const [searchValue,setSearchValue] = useState('');
  const [check,setCheck] = useState(false);
  const [login,setLogin] = useState('');
  const [passwor,setPassword] = useState('');
  const [openModal,setModal] = useState(false);
  const [id,setId] = useState('');



  const deleteHandler = async (e) =>{
    setValue(e.target.value);
    await axios.delete(`http://localhost:3003/users/${value}`);

    //window.location.reload(false);
  }

  const LoginHandler = (e) =>{
      setLogin(e.target.value)
  }
  const PasswordHandler = (e) =>{
    setPassword(e.target.value)
  }

  const InputHandler = (e) =>{
    setSearchValue(e.target.value)
  }

  const CheckHandler = () => {
      if (login === 'admin' && passwor === 'admin') {
        setCheck(true)
      }
  }
  const filteredUsers = props.userList.filter(user => user.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
      <div>

        {
          check ?    
          <div>
            <div className='w-50 mx-auto '>
            <Link to='/add'className=" mt-3 btn btn-primary w-100 add" >Add User</Link>
            </div>
              <input
                  onChange={InputHandler}
                  type="text"
                  placeholder='Search'
                  className='form-control w-50  my-3 mx-auto'/>
              <Table striped="striped" bordered="bordered" hover="hover" size="sm">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Full Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Delete</th>
                          <th>Update</th>

                      </tr>
                  </thead>
                  <tbody>
                      { filteredUsers.map(user => { return (
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>
                          <td>
                              <button value={user.id} onClick={deleteHandler} className='btn btn-danger'>Delete</button>
                          </td>
                          <td>
                              <button value={user.id} onClick={(e) => {
                                setModal(true)
                                setId(e.target.value)
                                console.log(id);
                              }} className='btn btn-warning'>Update</button>
                          </td>

                      </tr>
                      ) }) }
                  </tbody>
              </Table>
              {openModal && <Modal closeModal = {setModal} id = {id} />}
          </div>
          :
          <form className='col-lg-3 col-md-6 col-12 mx-auto mt-5'>
              <div className="form-outline mb-4">
                  <input
                      onChange={LoginHandler}
                      type="email"
                      id="form2Example1"
                      className="form-control"/>
                  <label className="form-label" for="form2Example1">Login</label>
              </div>

              <div className="form-outline mb-4">
                  <input
                      onChange={PasswordHandler}
                      type="password"
                      id="form2Example2"
                      className="form-control"/>
                  <label className="form-label" for="form2Example2">Password</label>
              </div>

              <button onClick={CheckHandler} type="button" className="btn btn-primary w-100">Sign in</button>

          </form>
          }
          </div>
  )
}
