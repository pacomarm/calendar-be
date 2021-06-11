const {response} = require('express');
const User = require('../models/User');

const createUser = async(req,res = response) => {

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email})

        if (user){
            return res.status(500).json({
                ok: false,
                msg: 'ID has been used',
            })
        }
        user = new User(req.body);
        await user.save();
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
        })
    } catch (e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'DB error bro',
        })
    }
}

const loginUser = (req,res = response) => {

    const {email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const revalidateToken = (req,res = response) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {createUser, loginUser, revalidateToken}
