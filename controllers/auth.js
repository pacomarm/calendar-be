const {response} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs')

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

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt)

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

const loginUser = async(req,res = response) => {

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email})

        if (!user){
            return res.status(500).json({
                ok: false,
                msg: 'User DNE bro',
            })
        }

        // confirm password
        const validPassword = bcrypt.compareSync( password, user.password );

        if(!validPassword){
            return res.status(500).json({
                ok: false,
                msg: 'Wrong pwd bro',
            })
        }

        // Generar JWT
        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token: 'gg'
        })
    } catch (e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'DB error bro',
        })
    }
}

const revalidateToken = (req,res = response) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {createUser, loginUser, revalidateToken}
