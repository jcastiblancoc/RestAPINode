const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());

const fruits = [
    {
        name: "Apples",
        id: 1
    },
    {
        name: "Bananas",
        id: 2
    },
    {
        name: "Cherries",
        id: 3
    },
    {
        name: "Dates",
        id: 4
    },
    {
        name: "Grapes",
        id: 5
    },
    {
        name: "Lemons",
        id: 6
    },
    {
        name: "Melons",
        id: 7
    }
]


app.get('/', (req,res) => {
    res.send('Course of restAPI in Node JS');
});


app.get('/api/fruits', (req, res) => {
    res.send(fruits);
});


app.get('/api/fruits/:id', (req, res) => {
    const fruit = fruits.find( c => c.id === parseInt(req.params.id));
    if(!fruit)res.status(404).send('Fruit not found');
    res.send(fruit);
});


app.post('/api/fruits', (req, res) => {
    const {error} = validateFruit(req.body);
    if (error){
        res.status(400).send(error.detail[0].message)
        return;
    }
    const fruit = {
        id: fruits.length + 1,
        name: req.body.name
    };
    fruits.push(fruit);
    res.send(fruit)
});


app.put('/api/fruits/:id', (req, res) => {
    const fruit = fruits.find(c => c.id ===parseInt(req.params.id));
    if (!fruit) res.status(400).send("Fruit not Found");

    const {error} = validateFruit(req.body);
    if (error){
        res.status(400).send(error.detail[0].message);
        return;
    }
    fruit.name = req.body.name;
    res.send(fruit);
});


app.delete('/api/fruits/:id', (req, res) => {
    const fruit = fruits.find(c => c.id ===parseInt(req.params.id));
    if (!fruit) res.status(400).send("Fruit not Found");
    const index = fruits.indexOf(fruit);
    fruits.splice(index,1);
    res.send(fruit);
});


function validateFruit(fruit){
    const schema = Joi.object({name: Joi.string() .min(3) .required()});
    const validation = schema.validate(fruit);
    return validation;
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`listening on port ${port}...`));