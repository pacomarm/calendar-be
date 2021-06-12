const {response} = require('express');
const Event = require('../models/Event');

const getEvents = async(req,res = response) => {
    res.json({
        ok: true,
        msg: 'get events'
    })
}
const createEvent = async(req,res = response) => {

    const event = new Event(req.body);
    try{
        event.user = req.uid;
        const savedEvent = await event.save();
        return res.json({
            ok: true,
            event: savedEvent
        })
    } catch (e){
        console.log(e);
        return res,status(500).json({
            ok: false,
            msg: 'Error bro'
        })
    }

}
const updateEvent = async(req,res = response) => {
    res.json({
        ok: true,
        msg: 'update event'
    })
}
const deleteEvent = async(req,res = response) => {
    res.json({
        ok: true,
        msg: 'delete event'
    })
}

module.exports = {getEvents, createEvent, updateEvent, deleteEvent}