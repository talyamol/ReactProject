
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_RECIPE } from "./Store/action";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./index.css"; // הוסף קובץ CSS עם העיצוב



const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState("");
    const [time, setTime] = useState(0);
    const [difficulty, setDifficulty] = useState(0);

    const dispatch = useDispatch();
    const navig = useNavigate()

    const nav = (recipe) => {
        console.log("aaaaaa")

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/recipe`)
            .then(x => {
                setRecipes(x.data)
                dispatch({ type: GET_RECIPE, data: x.data })
                // console.log(x.data);
            })
            .catch(err => console.error(err))
            .finally()
    }, [])
    return (
        <Fragment>
            {/* <div className="filters">
                <TextField
                    fullWidth
                    placeholder="קושי"
                    onChange={(e) => setDifficulty(e.target.value)}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    fullWidth
                    placeholder="זמן"
                    onChange={(e) => setTime(e.target.value)}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    fullWidth
                    placeholder="קטגוריה"
                    onChange={(e) => setCategory(e.target.value)}
                    variant="outlined"
                    size="small"
                />
            </div> */}
            <div className="recipes-container">
                {recipes?.map((recipe) => (
                    <Card key={recipe.Id} className="recipe-card">
                        <CardContent className="card-content">
                            <Typography variant="h6" gutterBottom>
                                {recipe.Name}
                            </Typography>
                        <CardMedia component="img" height="140" image={recipe.Img} alt={recipe.Name} />

                            <Button
                                type="button"
                                variant="contained"
                                color="primary"
                                onClick={() => navig(`/recipe`, { state: { recipe } })}
                            >
                                הצגת פרטי מתכון
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Fragment>
    );
};

export default Recipes;
