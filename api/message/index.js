//create cars api using express


//module.exports = async function (context, req) {
 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cars = require('../../src/cars.json');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//get all cars
// /api
app.get('/api/cars', (req, res) => {
    res.json(cars);
});

//get car by id
app.get('/api/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('/api/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('/api/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('/api/cars', (req, res) => {
    console.log(req);
    const newCar = req.body;
    //console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3001
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});


// if (req.method === 'GET') {
//     // Handle GET requests
//     // Example: Return all cars
//     context.res = {
//         status: 200,
//         body: cars
//     };
// } else if (req.method === 'POST') {
//     // Handle POST requests
//     // Example: Add a new car
//     const newCar = req.body;
//     cars.push(newCar);
//     context.res = {
//         status: 201,
//         body: newCar
//     };
// } else {
//     // Handle other HTTP methods
//     context.res = {
//         status: 405,
//         body: "Method Not Allowed"
//     };
// }




// };