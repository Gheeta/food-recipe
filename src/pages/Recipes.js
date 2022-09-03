import React from 'react'
 import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

export default function Recipes() {
  const recipes=[
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_1.jpg",
      authorImg:"/img/top-chiefs/img_1.jpg",
    },
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_2.jpg",
      authorImg:"/img/top-chiefs/img_2.jpg",
    },
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_3.jpg",
      authorImg:"/img/top-chiefs/img_3.jpg",
    },
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_4.jpg",
      authorImg:"/img/top-chiefs/img_4.jpg",
    },
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_5.jpg",
      authorImg:"/img/top-chiefs/img_5.jpg",
    },
    {
      title:"Chicken Pan Pizza",
      image:"/img/gallery/img_6.jpg",
      authorImg:"/img/top-chiefs/img_8.jpeg",
    }
  ].sort(()=>Math.random() - .5);
  return (
    <>
      <PreviousSearches/>
      <div className='recipes-container'>
          {/*
           <RecipeCard/>
           <RecipeCard/>
           <RecipeCard/>
           <RecipeCard/>
           <RecipeCard/>
           <RecipeCard/>*/
          } 
          
          {recipes.map((recipe, index)=>(
            <RecipeCard key={index} recipe={recipe}/>
          ))}
      </div>
    </>
  )
}
