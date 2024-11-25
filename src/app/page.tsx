'use client'
import { useState } from "react";
import Child from "./Child";

export default function Home() {
  const [value,setValue]=useState(0)
  function HandleAdd(){
    setValue(value + 1)

  }
  function HandleSubs(){
    setValue(value - 1)

  }
  let FavDish="Biryani"
  let myName="Raja Mannan Khan"
  let Passion="Coding"

  
  return (
    <div className="bg-gray-500 h-full">
    <div className="text-3xl text-center font-extrabold  p-3" >Counter App</div>
    <div className="flex flex-col mt-24 gap-6 items-center justify-center">
      <p className="font-extrabold text-2xl font-serif">Value:{value}</p>
      <button onClick={HandleAdd}  className="rounded-lg bg-blue-600 p-2 px-8 font-semibold ">Add +</button>
    <button onClick={HandleSubs} className="bg-red-600 p-2 px-8 rounded-lg font-semibold ">Substract -</button></div>
    <Child Favdish={FavDish} name={myName} passion={Passion}/>
    </div>
  );
}
