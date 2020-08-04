import React, { Component } from "react"
import Player from "./Player"
import axios from "axios"


class Players extends Component {
    constructor() {
        super()
        this.state= {
            roster: [],
            index: 0,
            name: ''
    
        }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
      
}
componentDidMount() {
    axios.get("/api/roster")
    .then(res => {
        console.log(res.data)
        this.setState({
          roster: res.data
        })
      })
      .catch( err => console.log(err))
}

// searchPlayerHandler(event) {
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }
        
    

    next = () => {
        if(this.state.index < this.state.roster.length -1){
            this.setState({index: this.state.index + 1})
        }
    }

    previous = () => {
        if(this.state.index > 0) {
            this.setState({index: this.state.index - 1})
        }
    }
    deletePlayer = (id) => {
        axios.delete(`/api/roster?id=${id}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            roster: res.data
          })
        })
        .catch(err => console.log(err))
     }
     
    getPlayer = (name) => {
        axios.get(`/api/search?name=${name}`)
             .then(res => {
                //need to change index on page to res.data.index
                //  console.log(res.data)
                //  if(!res.data.index === -1) {

                //      this.setState({
                //          index: res.data.index
                //    })
                //  }
            })
            .catch(err => console.log(err))
        }
render() {
    
    return (
        <div>
            {this.state.roster.length > 0 && <Player index={this.state.index} length={this.state.roster.length} player={this.state.roster[this.state.index]}/>}
            <button className="delete-btn" onClick={ () => this.deletePlayer(this.state.roster[this.state.index].id)}>X</button>
           <form className="search">
               <input
               name="name"
               value={this.state.name}
               type="text"
               placeholder="search"
               onChange={e => {
                   this.setState({name:e.target.value})
                   this.getPlayer(e.target.value)}}>
                   
               </input>
           </form>
            <div className="index">
            <button onClick={this.previous}>Previous</button>
            <button onClick={this.next}>Next</button>

            </div>
            
        </div>
)
    }
}






export default Players