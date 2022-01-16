import React, {useEffect, useState} from 'react';
import {userServices} from "../services/user.services";
import User from "./User";

import './users.css';

const Users = () => {
    const [user, setUser] = useState([]);
    const [form,setForm] = useState({name: '', username: '', email: ''});

    useEffect(()=>{
        userServices.getAll().then(value => setUser(value));
    }, [])


    const find = (e) => {
        e.preventDefault();
        if(form.name){
            setUser(user.filter(value => value.name.includes(form.name)));
        }
        if(form.username){
            setUser(user.filter(value => value.username.includes(form.username)));
        }
        if(form.email){
            setUser(user.filter(value => value.email.includes(form.email)));
        }
    }

    const formHendler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form className={'form'} onSubmit={find}>
                <div><label>Name:<input type="text" name={'name'} value={form.name} onChange={formHendler}/></label></div>
                <div><label>Username:<input type="text" name={'username'} value={form.username} onChange={formHendler}/></label></div>
                <div><label>Email:<input type="text" name={'email'} value={form.email} onChange={formHendler}/></label></div>
                <div><button>Find</button></div>
            </form>

            {user.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;