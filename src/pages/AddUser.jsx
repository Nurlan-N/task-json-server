import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export const AddUser = () => {
    const [newName,setNewName] = useState('');
    const [newPhone,setNewPhone] = useState('');
    const [newemail,setNewEmail] = useState('');

    const UserHandler = () => {
        const addUser = async () => {
            
            const name = newName;
            const phone = newPhone;
            const email= newemail
            
            await axios.post('http://localhost:3003/users',{name,phone,email})
            
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
        <input className='form-control' onChange={NameHandler} type="text" placeholder='Full Name' />
        <input className='form-control my-5' onChange={PhoneHandler} type="phone" placeholder='phone'/>
        <input className='form-control' onChange={EmailHandler} type="email" placeholder='email'/>
        <button onClick={UserHandler} className='btn btn-lg btn-success mt-3 w-100' >Add User</button>
    </div>
  )
}
