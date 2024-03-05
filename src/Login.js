import { React, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { ADD_USER } from "./Store/action";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

const schema = yup.object({
    Username: yup.string().required(),
     Password: yup.string().required(),
    }).required();
export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)});
    
        const dispatch = useDispatch()
        const navigate=useNavigate();

    const onSubmit = (data) => {
        console.log(data.Password)
                axios.post(`http://localhost:8080/api/user/login`,data)
                    .then(response => {
                        console.log(response.data);
                        dispatch({type:ADD_USER,data:response.data})
                    })
                    .catch(error => {

                        console.error(error);
                    });
            {navigate(`/recipes`)}

            }
        return (
        
                
            <form onSubmit={handleSubmit(onSubmit)} className="login">
            <Input {...register("Username")} placeholder="שם משתמש"/>
            <p>{errors.title?.message}</p>
            <Input {...register("Password")}placeholder="סיסמה" />
            <p>{errors.body?.message}</p>
            <Button type="submit" variant="contained" color="primary">Log In</Button>
        </form>
          
        );
    };
   
