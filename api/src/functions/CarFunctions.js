const { app } = require('@azure/functions');
const fs = require('fs').promises;
const data = require('./cars.json');



//returns cars array XD
app.http('cars', {
    methods: ['GET'],
    authlevel: 'anonymous',
    handler: async (request, context) =>{
        try{
            const carsData = await fs.readFile('cars.json', 'utf8');
            const data = JSON.parse(carsData);
            return{
                status:200,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            };
        }catch(error){
            console.error('Error handling request:', error);
            return {
                status: 500,
                body: 'Server Error, Could not process request.'
            };
        }
        
        
    }

});








