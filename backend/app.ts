git basimport * as express from 'express';
import * as cors from 'cors'
import {router as learninFactController} from "./src/LearningFact/learningFact.controller";
import {router as learningPackageController} from "./src/LearningPackage/learningPackage.controller"
const app = express();


const port:number = 3000;
app.use(cors())
app.use(express.json())
app.use('/api/fact', learninFactController)
app.use('/api/package', learningPackageController);

app.get('/api', async(req, res) => {
    res.status(200).json({message: 'Welcome to API'})
})

async function main() {
    app.listen(port, () => {
        console.log('READY on 3000')
    })
}

main();