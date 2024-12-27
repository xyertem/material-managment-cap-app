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
        const tx = cds.transaction(req.entity);
        return tx.run(SELECT.from());
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