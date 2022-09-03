import React from 'react'
import ChiefCard from './ChiefCard'

export default function ChiefsSection() {
    const chiefs=[
        {
            name: "Chief Gheeta",
            img: "/img/top-chiefs/img_8.jpeg",
            recipesCount: "04",
            cuisine: "Egyption"
           
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
      
        {
            name: "Erich Maria",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        }
    ]
  return (
    <div className='section chiefs'>
        <h1 className='title'>Our Top Chiefs</h1>
        <div className='top-chiefs-container'>
           {/*
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>*/
           } 
           {chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief}/>) }
        </div>
    </div>
  )
}
