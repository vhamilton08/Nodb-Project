import React, { Component } from "react"

class Input extends Component {
    constructor () {
        super()
        this.state = {
            addName: "",
            addCollege: "",
            addImage: ""
        }
        this.addPlayerHandler = this.addPlayerHandler.bind(this)
        }   
        addPlayerHandler(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    
    render() {
        const {addName, addCollege, addImage} = this.state
        return (
            <div className="add-container">
                <form>
                    <input
                    name="addName" 
                    value={this.state.addName} 
                    type="text" 
                    placeholder="Name"
                    onChange={e => this.addPlayerHandler(e)}/>

                    <input
                    name="addCollege"
                    value={this.state.addCollege}
                    type="text"
                    placeholder="College"
                    onChange={e => this.addPlayerHandler(e)}/>

                    <input name="addImage"
                    value={this.state.addImage}
                    type="url"
                    placeholder="Image"
                    onChange={e => this.addPlayerHandler(e)}/>
                    <button className="addButton" onClick={() => this.props.addPlayer(addName, addCollege, addImage)}>ADD PLAYER</button>
                </form>

            </div>
        
        )
    }
}

export default Input 