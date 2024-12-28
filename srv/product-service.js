const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    //-------------- SERVICE ENTITIES ----------------//
    const {
        Products,
        ProductDetails
    } = this.entities;

    (async function () {
        db = await cds.connect.to('db');
    })();

    this.on('READ', Products, async( req, res ) =>{
        try {
            const data = req.data;
            const tx = db.tx();
            if(Object.keys(data)?.length === 0){
                return await tx.run(SELECT.from(Products));
            } else if (data?.ID) {
                const result = await tx.run(SELECT.from(Products).where({ ID: data.ID.toString() }));
                return result;
            } else {
                return req.reject(400,"Bad request");
            }
        } catch (error) {
            throw error;
        }
        
    });

    this.on('UPDATE', Products, async ( req, res ) => {
       
    });

    this.on('CREATE',Products, async( req, res ) => {
        return req.notify(201,"Created");
    });

    this.on('DELETE',Products, async( req, res ) => {
        return req.notify(200,"Created");
    });
})