

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const Recipe = () => {
  const navig = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const select = state.recipe;
  const currntUser = useSelector(state => state.user);

  const add_edit = (Id, Name) => {
    navig("/AddRecipe", { state: { Id } });
  };

  const deleteRecipe = (Id, Name) => {
    axios.post(`http://localhost:8080/api/recipe/delete/${Id}`)
      .then(x => {
        dispatch({ type: 'DELETE_RECIPE', x: Id });
      })
      .catch(err => console.log(err))
      .finally();
  };

  const print = () => {
    window.print();
  };

  return (
    <>
    <div className='recipe'>
      <div >
        <Typography variant="h6">{select?.Name}</Typography>
        <img src={select?.Img} alt={select?.Name} />
        <Typography variant="h6">דרגת קושי: {select?.Difficulty}</Typography>
        <Typography variant="h6">משך זמן הכנה: {select?.Duration}</Typography>
        <Typography variant="h6">תיאור: {select?.Description}</Typography>
        <br />
        <div>
          {select?.Instructions?.map(y => <Typography paragraph key={y}>{y}</Typography>)}
        </div>
        <br />
        <div>
          {select?.Ingrident?.map(v => (
            <div key={v.Name}>
               <Typography>{v.Count}</Typography>
               <Typography>{v.Type}</Typography>
              <Typography>{v.Name}</Typography>
            </div>
          ))}
        </div>
      </div>
      <Button type="button" onClick={print}>להדפסה</Button>
      <div>
        {select?.UserId === currntUser?.Id || currntUser?.Username === "admin" ? (
          <div>
            <Button type="button" onClick={() => add_edit(select.Id, select.Name)}>הוספה</Button>
            <Button type="button" onClick={() => deleteRecipe(select.Id, select.Name)}>מחיקה</Button>
          </div>
        ) : (
          <div />
        )}
      </div>
      </div>
    </>
  );
};

export default Recipe;
