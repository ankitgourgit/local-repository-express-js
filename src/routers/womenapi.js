const express = require('express');
const router = new express.Router();
const WomensData = require("../models/womens");

//create womens data

router.post('/womens', async (req, res) => {
    try {
        const user = new WomensData(req.body)
        console.log(user)
        const createUser = await user.save();
        res.status(201).send(createUser)

    } catch (e) {
        res.status(400).send(e)
    }
})

//get all rec
router.get("/womens", async (req, res) => {
    try {
        const womensData = await WomensData.find();
        res.status(200).send(womensData);

    } catch (e) {
        res.status(400).send(e);
    }
})

//get rec by id
router.get("/womens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const womenData = await WomensData.findById(_id);

        if (!womenData) {
            res.status(404).send()
        } else {
            res.send(womenData)
        }

    } catch (e) {
        res.status(500).send(e);
    }
})

//update data by id
router.patch("/womens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await WomensData.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//date women data by id
router.delete("/womens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await WomensData.findByIdAndDelete(_id);
        res.send(deleteUser);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;
