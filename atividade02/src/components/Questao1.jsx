import React from 'react'

const Hero= props=>
    <h1> competidor: {props.name} {props.img} </h1>

const Enemy = props=>
    <h1>competidor: {props.name} {props.img}</h1>

const Arena= props=>
            <div>
                {props.children}
            </div>
export {Arena,Hero,Enemy}