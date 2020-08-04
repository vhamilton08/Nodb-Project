import React from "react"



const Player = (props) => {
    console.log(props)
    return (
    <div>
         <h1 className="name">{props.player.name}</h1>
         
         <span className="college">{props.player.college}</span>

        <h2 className="index-counter">{props.index + 1}/{props.length}</h2>

        <img className="player-image" alt="player" src={props.player.image}/>

        
    </div>
    )
}



export default Player
