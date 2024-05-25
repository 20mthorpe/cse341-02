const mongodb = require('../database/connect.js');
const ObjectId = require('mongodb').ObjectId;

/* GET all states */
const getStates = async (req, res, next) => {
    try {
        const db = await mongodb.getDb();
        const result = await db.db().collection('states').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting states.');
    }
}

/* GET one state */
const getState = async (req, res, next) => {
    try {
        const stateId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const result = await db.db().collection('states').findOne({ _id: stateId });

        if (!result) {
            return res.status(404).send('State not found.');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting state.');
    }
}

/* POST (Create) one state */
const postState = async (req, res, next) => {
    try {

        const db = await mongodb.getDb();
        const result = await db.db().collection('states').insertOne(req.body);

        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);

    } catch (err) {

        console.log(err);
        res.status(500).send('Error posting state.');

    }
}

/* PUT (update) one state */
const putState = async (req, res, next) => {
    try {
        const stateId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const result = await db.db().collection('states').replaceOne({ _id: stateId }, req.body);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating state.');
    }
}

/* DELETE one state */
const deleteState = async (req, res, next) => {
    try {
        const stateId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const deletedState = await db.db().collection('states').deleteOne({ _id: stateId });

        if (deletedState.deletedCount === 0) {
            return res.status(404).send('State not found.');
        } else {
            res.status(204).send('State deleted.');
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting state.');
    }
}

module.exports = {
    getStates,
    getState,
    postState,
    putState,
    deleteState
};