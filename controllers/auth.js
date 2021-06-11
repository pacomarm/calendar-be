const {response} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');
const jwt = require('jsonwebtoken');

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

        // generate JWT
        const token = await generateJWT(user.id, user.name)

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
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

        // generate JWT
        const token = await generateJWT(user.id, user.name)

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
    } catch (e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'DB error bro',
        })
    }
}

const revalidateToken = async(req,res = response) => {

    const {uid, name} = req;

    // new jwt
    const token = await generateJWT(uid, name)


    res.json({
        ok: true,
        token
    })
}

module.exports = {createUser, loginUser, revalidateToken}
