import './latihan.css'
import React, { useState } from 'react'

// function LatihanReact() {
//     return(
//         <div>
//             <h1>Jam Sekarang</h1>
//             {new Date().toLocaleTimeString()}
//         </div>
//     )

// } Membuat Jam otomatis

// function LatihanReact(){
//     return(
//         <div style={{width : '200px', height: '200px', backgroundColor: 'lightseagreen', margin: '50px auto'}}></div>
//     )
// } inline style React

// function LatihanReact() {
//     const box = "box"
//     return(
//         <div className={box}></div>
//     )
// } style dinamis react

// function LatihanReact() {
//     return(
//         <button className="button-listener" onClick={function(){
//             alert("hallo")
//         }}>Click Me</button>
//     )
// } event listener reguler

// function LatihanReact(){
//     return(
//         <button className="button-listener" onClick={clickme}>Click Me</button>
//     )
// }

// function clickme(){
//     return(
//         alert("Hallo")
//     )
// } event listener function terpisah

// function LatihanReact() {
//     return(
//         <div>
//             <button className="button-listener" onClick={clickme.bind(this, "hallo")}>Click Me</button>
//         </div>
//     )
// }

// function clickme(msg){
//     alert(msg)
// } event listener function argumen

// const LatihanReact = () => {
//     const [count, setcount] = React.useState(0)
//     return(
//         <div>
//             <h1>belajar Use State</h1>
//             <p>angka saat ini {count}</p>
//             <button onClick={()=>{
//                 setcount(count+1)
//             }}>+</button>
//             <button onClick={()=>{
//                 setcount(count-1)
//             }}>-</button>
//         </div>
//     )
// } counter

// const LatihanReact = () => {
//     const [color, setcolor] = React.useState("red")
//     return(
//         <>
//         <div style={{backgroundColor:color}}></div>
//         <button onClick={()=>{
//             setcolor("blue")
//         }}>blue</button>
//         <button onClick={()=>{
//             setcolor("green")
//         }}>green</button>
//         </>
//     )
// }

export default LatihanReact