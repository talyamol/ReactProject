
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ADD_PRODUCT } from "./Store/action";
import { Input, Button, Typography, Paper } from "@mui/material";

const AddProduct = () => {
  const schema = yup.object({
    Name: yup.string().required(),
    UserId: yup.number().positive().integer().required(),
    Count: yup.number().required(),
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:8080/api/bay`, data)
      .then((x) => {
        dispatch({ type: ADD_PRODUCT, data: x.data });
      })
      .catch((err) => console.error(err))
      .finally();
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("Name")} placeholder="Name of Product" />
        <p>{errors.Name?.message}</p>
        <Input {...register("Count")} placeholder="Count" />
        <p>{errors.Count?.message}</p>
        <Input {...register("UserId")} placeholder="UserId" />
        <p>{errors.UserId?.message}</p>
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </form>
    </Paper>
  );
};

export default AddProduct;








