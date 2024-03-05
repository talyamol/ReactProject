import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { ADD_USER } from "./Store/action";
import { Input, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const schema = yup.object({
    Username: yup.string().required(),
    Password: yup.string().required(),
    Name: yup.string().required(),
    Phone: yup.number().required(),
    Tz: yup.number().required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios.post(`http://localhost:8080/api/user/sighin`, data)
      .then(response => {
        console.log(response.data);
        dispatch({ type: ADD_USER, data: response.data });
        navigate(`/recipes`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Paper elevation={3} style={{ padding: "4vh", margin: "20vh" ,marginLeft:"35vw",marginRight:"35vw",marginTop:"10vh",backgroundColor:"rgba(245, 245, 245, 0.677)"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="UserName" {...register("Username")} />
        <p>{errors.Username?.message}</p>

        <Input type="password" placeholder="Password" {...register("Password")} />
        <p>{errors.Password?.message}</p>

        <Input type="text" placeholder="Name" {...register("Name")} />
        <p>{errors.Name?.message}</p>

        <Input type="phone" placeholder="Phone" {...register("Phone")} />
        <p>{errors.Phone?.message}</p>

        <Input type="email" placeholder="Email" {...register("Email")} />
        <p>{errors.Email?.message}</p>

        <Input type="number" placeholder="Tz" {...register("Tz")} />
        <p>{errors.Tz?.message}</p>

        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </Paper>
  );
};

export default SignIn;
