import logoImg from '../assets/logo.jpg';
import {useState,useEffect} from 'react';
 import MealItem from './MealItem.jsx';
 import useHttp from '../hooks/useHttp.js';
 import Error from './Error.jsx';
 const requestConfig ={};
export default function Meals(){
 const{data:loadedMeals,isLoading,error}=useHttp('http://localhost:3000/meals',requestConfig,[]);
 console.log(loadedMeals)
 if (isLoading){
  return<p className="center">fetchting meals...</p>
 }
 if(error){
 return <Error title="failed to fetch meals" message={error}/>
 }
 return (
  <div style={{ margin:'10px'}}>
  <ul id ="meals">
  {loadedMeals.map((meal)=> (
    < MealItem  key={meal.id} meal={meal}/>
  ))}
  </ul>
  </div>
 )
 
}
