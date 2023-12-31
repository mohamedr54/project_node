import {Router} from "express";
export const router = Router();
import {getAll, createFact, deleteFact, updateFact} from './learningFact.service'

router.get('/', async(req, res) => {
    res.status(200).json(getAll());
})

router.post('/', async(req, res) => {
    const body = req.body
    try {
        createFact(body);
        res.status(200).send({status: 200, message: 'added'})
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:id', async(req, res) => {

    try {
        deleteFact(req.params.id);
        res.status(200).send({status: 200, message: 'deleted'})
    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/', async(req, res) => {
    const body = req.body;
    try {
        updateFact(body);
        res.status(200).send({status: 200, message: 'updated'})
    } catch (err) {
        res.status(400).send(err)
    }
})