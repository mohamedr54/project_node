import {Router} from "express";
import {createLp, deleteLp, getAll, getSummary, updateLp} from "./learningPackage.service";

export const router = Router()

router.route('/')
    .post(async (req, res) => {
        const body = req.body;
        try {
            createLp(body);
            res.status(200).send({status: 200, message: 'Added'})
        } catch (err) {
            res.status(400).send(err)
        }
    })
    .get(async (req, res) => {
        try {
            res.status(200).send(getAll())
        } catch (err) {
            res.status(400).send(err)
        }
    })
    .put(async (req, res) => {
        const body = req.body;
        try {
            updateLp(body);
            res.status(200).send({status: 200, message: 'Updated'})
        } catch (err) {
            res.status(400).send(err)
        }
    })

router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id
        try {
            deleteLp(id)
            res.status(200).send({status: 200, message: 'Deleted'})

        } catch (err) {
            res.status(400).send(err)
        }
    })


router.get('/summaries/search', async (req, res) => {
    const title = req.query.title
    try {
        getSummary(title).length === 0 ?
            res.status(200).send("No matching package")
            :
            res.status(200).send(getSummary(title))
    } catch (err) {
        res.status(400).send(err)
    }
})


