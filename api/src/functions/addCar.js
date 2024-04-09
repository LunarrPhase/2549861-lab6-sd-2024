const {app} =  require('@azure/functions');
const fs = require('fs').promises;

app.http('addCar', {
    methods: ['POST'],
    handler: async (request, context) =>{
        try{
        newCar = await request.json();

        const cardata = await fs.readFile(cars.json,'utf8');
        const cars = JSON.parse(carsData);

        await fs.writeFile(cars.json, JSON.stringify(cars, null, 2),'utf8');

        return{
            status: 200,
            body:"Added new car successfully"
        };
    }
    
    catch(error){

        console.error('Error adding the new car',error);
        return{
            status: 500,
            body: 'Server Error, Could not add new car.'

        };

    }

}


});