const {app} =  require('@azure/functions');
const path = require('path');
const fs = require('fs').promises;

const jsonFilePath = path.resolve(__dirname, 'cars.json');

app.http('deleteCarByid',{
    methods:['DELETE'],
    route: 'cars/{carID}',
    handler: async (request, context) =>{
        const id = request.params.carID
        return{
            status:200,
            body: id
        }

    }
});