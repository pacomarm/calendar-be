const {response} = require('express');
const Event = require('../models/Event');

const getEvents = async(req,res = response) => {

    const events = await Event.find().populate('user','name'); // populate is used to get the info of the user that created the event, we only want the name of the User obj

    res.json({
        ok: true,
        events
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
        return res.status(500).json({
            ok: false,
            msg: 'Error bro'
        })
    }

}
const updateEvent = async(req,res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try{

        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
            ok: false,
            msg: 'ID of event DNE bro'
            })
        }

        if (event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'You cant edit the Event bro'
                })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true} )

        return res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error bro'
        })
    }
}
const deleteEvent = async(req,res = response) => {

    const eventId  = req.params.id;
    const uid = req.uid

    try{

        const event = await Event.findById(eventId);

        if(!event){
            return res.status(404).json({
            ok: false,
            msg: 'ID of event DNE bro'
            })
        }

        if (event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'You cant delete the Event bro'
                })
        }

        await Event.findByIdAndDelete( eventId )

        return res.json({
            ok: true,
            msg: 'Event has been deleted'
        })

    } catch (e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error bro'
        })
    }
}

module.exports = {getEvents, createEvent, updateEvent, deleteEvent}