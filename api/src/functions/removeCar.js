const {app} =  require('@azure/functions');
const path = require('path');
const fs = require('fs').promises;

const jsonFilePath = path.resolve(__dirname, 'cars.json');
//const carsFilePath = 'cars.json';

app.http('removeCar',{
    methods:['DELETE'],
    route: 'cars/{carID}',
    handler: async (request, context) =>{
        try {
            const id = request.params.carID
            
            //const carID = request.params.carID;

            const carsData = await fs.readFile(jsonFilePath, 'utf8');
            let cars = JSON.parse(carsData);

            const index = cars.findIndex(car => car.id === id);
            if(index !==-1)
            {
                cars.splice(index, 1);
                await fs.writeFile(jsonFilePath, JSON.stringify(cars));
                return{
                    status:200,
                    body: 'Car with id ${id} deleted'
                };

            } else{
                return{
                    status: 404,
                    body: 'Car with ID ${id} not found'
                };

            }
        }catch (error){
                console.error('Error with deleting car: ',error);

                return{
                    status: 500,
                    body: id
            };
    
        }
        
        

    }



});



// //delete car
// app.delete('/api/cars/:id', (req, res) => {
//     const id = req.params.id;
//     const index = cars.findIndex(car => car.id === id);
//     cars.splice(index, 1);
//     res.json({ message: `Car with id ${id} deleted` });
// });