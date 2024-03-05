
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { ADD_CATEGORY } from "./Store/action";
import { Button, Input } from "@mui/material";


const AddCategory = () => {
    const schema = yup.object({
        Name: yup.string().required()
    }).required()
    const [addCategories, setAddCategories] = useState([])
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        axios.post(`http://localhost:8080/api/category`, data)
            .then(x => {
                setAddCategories(x.data)
                dispatch({ type: ADD_CATEGORY, data: x.data })
                // console.log(category.data);
            })
            .catch(err => console.error(err))
            .finally()

    }



    return <div className="recipe">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("Name")} placeholder="Name" />
            <p>{errors.Name?.message}</p>
            <Button type="submit" variant="contained" color="primary">
        Add category
        </Button>
        </form>
    </div>
}
export default AddCategory;