const database = require('../services/database')

const User = require('../models/user')
const usersJSON = require('../data/user.json')

const addUsers = async () => {
    try {
        for (let user of usersJSON) {
            await new User(user).save()
        }
    } catch (err) {
        console.log(err.message)
    }
}

addUsers()