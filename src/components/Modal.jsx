import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Modal = ({closeModal , id}) => {
    const [newName,setNewName] = useState('');
    const [newPhone,setNewPhone] = useState('');
    const [newemail,setNewEmail] = useState('');
    const [users,setUsers] = useState([])
  
    useEffect(() => {
      const getUsers = async () => {
     const respons = id && await axios.get('http://localhost:3003/users/'+ {id})
        console.log(respons);
      }
      getUsers();
    },[])
    const UserHandler = () => {
        const addUser = async () => {
            
            const name = newName;
            const phone = newPhone;
            const email= newemail
            
            await axios.put(`http://localhost:3003/users/`,{name,phone,email})
            
        }
        addUser();
        window.location.reload(false);
    }
    const NameHandler = (e) => {
        setNewName(e.target.value)
    }
    const PhoneHandler = (e) => {
        setNewPhone(e.target.value)
    }
    const EmailHandler = (e) => {
        setNewEmail(e.target.value)
    }
  return (
    <div className='col-lg-5 mx-auto mt-5  col-6'>
        <input className='form-control' onChange={NameHandler} type="text" placeholder='Full Name'  />
        <input className='form-control my-5' onChange={PhoneHandler} type="phone" placeholder='phone'/>
        <input className='form-control' onChange={EmailHandler} type="email" placeholder='email'/>
        <button className='btn btn-lg btn-danger mt-3 w-100 ' onClick={() => closeModal(false)}>Cancel</button>
        <button onClick={UserHandler} className='btn btn-lg btn-success mt-3 w-100' >Update User</button>
    </div>  
  )
}
