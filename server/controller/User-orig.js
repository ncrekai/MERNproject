const User = require('../models/User.js');

const create = async(req,res) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.sendStatus(200).json({
            message: "Added successfully"
        })
    } catch (err) {
        return res.sendStatus(400).json({
            error: "I broke in controller/user/create"
        })
        // return res.json(400, {
        //     message:"Added Unsuccessfully"
        //  });
    }
}

const list = async(req,res) => {
    try {
        let users = await User.find().select('name email updated created');
        res.json(users);
    } catch (err) {
        return res.sendStatus(400).json({
            error:"I broke in controller/user/list"
         })
    }
}

const userById = async(req,res,next,id) => {
    try {
        let user = await User.findById(id);
        if (!user) res.sendStatus('400').json({
            error: "User doesn't exist"
        })
        req.profile = user
        next()
    } catch (err) {
        return res.sendStatus(400).json({
            error: "I broke in controller/user/userbyid"
        })
    }
}

const read = (req,res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const update = async(req,res) => {
    try {
        let user = req.profile
        user = extend(user,req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    } catch (err) {
        return res.sendStatus(400).json({
            error: "I broke in controller/user/update"
        })
    }
}

const remove = async(req,res) => {
    try {
        let user = req.profile
        let deletedUser = await user.deleteOne()
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)

    } catch (err) {
        return res.sendStatus(400).json({
            error: "I broke in controller/user/remove"
        })
    }
}
module.exports = {create, list, userById, read, update, remove}