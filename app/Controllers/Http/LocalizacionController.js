'use strict'

const Gps = use('App/Models/Localizacion');

class LocalizacionController {
  async Showlocalizacion({response}){
    const localizacion = await Gps.all()
    response.status(200).json({
      message: "Success",
      data: localizacion
    });
  }

  async Getlocalizacion({request,response}){
      const {longitud, latitud} = request.only(['latitud','longitud']);

      const localizacion = await Gps.create({latitud,longitud})

      response.status(201).json({
        message: 'Success',
        data: localizacion
      });


  }
}

module.exports = LocalizacionController
