const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;


/* GET all presidents */
const getPresidents = async (req, res, next) => {
    try {
        const db = await mongodb.getDb();
        const result = await db.db().collection('presidents').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting presidents.');
    }
}

/* GET one president */
const getPresident = async (req, res, next) => {
    try {
        const presId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const result = await db.db().collection('presidents').findOne({ _id: presId });

        if (!result) {
            return res.status(404).send('President not found.');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting president.');
    }
}

/* POST (Create) one president */
const postPresident = async (req, res, next) => {
    try {

        const db = await mongodb.getDb();
        const result = await db.db().collection('presidents').insertOne(req.body);

        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);

    } catch (err) {

        console.log(err);
        res.status(500).send('Error posting president.');

    }
}

/* PUT (update) one president */
const putPresident = async (req, res, next) => {
    try {
        const presId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const result = await db.db().collection('presidents').replaceOne({ _id: presId }, req.body);

        if (result.matchedCount === 0) {
            return res.status(404).send('President not found.');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(result);
        }


    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating president.');
    }
}

/* DELETE one president */
const deletePresident = async (req, res, next) => {
    try {
        const presId = new ObjectId(req.params.id);
        const db = await mongodb.getDb();
        const deletedPres = await db.db().collection('presidents').deleteOne({ _id: presId });

        if (deletedPres.deletedCount === 0) {
            return res.status(404).send('President not found.');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(result);
        }

    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting president.');
    }
}

module.exports = {
    getPresidents,
    getPresident,
    postPresident,
    putPresident,
    deletePresident
}