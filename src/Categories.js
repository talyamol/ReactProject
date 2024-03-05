
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import { GET_CATEGORY } from "./Store/action";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navig = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/category`)
      .then((category) => {
        setCategories(category.data);
        dispatch({ type: GET_CATEGORY, data: category.data });
        // console.log(category.data);
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

  return (
    <Fragment>
      <Paper elevation={3} style={{
        padding: "20px", backgroundColor: "transparent", marginTop: "10vh", marginLeft: "40vw", marginRight
          : "30vw"
      }} >
        {categories?.map((x) => (
          <Typography key={x.Id} className="category">{x?.Name}</Typography>
        ))}
        <Button 
          type="button"
          variant="contained"
          color="primary"
          onClick={() => navig(`/addCategory`, { state: { categories } })}
        >
          הוספת קטגוריה
        </Button>
      </Paper>
    </Fragment>
  );
};

export default Categories;
