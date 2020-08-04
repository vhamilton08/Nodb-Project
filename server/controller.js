const roster = require("./roster.json")

let id = 16

module.exports = {
    getRoster: (req, res) => {
        res.status(200).send(roster)
    },

    addRoster: (req, res) => {
        const {name} = req.body
        const {college} = req.body
        const {image} = req.body
        if(!name || !college || !image) {
            res.status(405).send(`Please fill out all forms`)
        } else {
            const newRoster = {
                id,
                name,
                college,
                image
            }
            roster.push(newRoster)
            id++
            res.status(200).send(roster)
        }
     },

     editImage: (req, res) => {
        const {image} = req.body
        const {id} = req.params
        const index = roster.findIndex( roster => roster.id === +id)
        if(!image){
            res.status(405).send(`Please enter a valid url`)
        } else {
            roster[index].image = image
            res.status(200).send(roster)

        }
    },

    deletePlayer: (req, res) => {
        const {id} = req.query
        const index = roster.findIndex(roster => roster.id === +id)
        roster.splice(index, 1)
        console.log(roster)
        res.status(200).send(roster)
    },

    getPlayer: (req, res) => {
        const {name} = req.query
        const index = roster.findIndex(roster => roster.name.includes(name))
        if(index === -1) {
            res.status(500).send(`Player name does not exist.`)
        } else {
            res.status(200).send({index})
        }
    }



    }