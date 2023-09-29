(async () => {
    const Planet = require('../models/Planet')

    // Cadastrar dados
    // const newPlanet = await Planet.create({
    //     name: "Jupiter",
    //     position: 6
    // })

    // Trazer todos os dados
    // const seePlanets = await Planet.findAll()
    
    // Trazer um dado especifico pela primaryKey
    // const seePlanets = await Planet.findByPk(1)
    
    // Trazer um dado pelo nome
    // const seePlanets = await Planet.findAll({
    //     where: {
    //         name: "Terra"
    //     }
    // })

    // Atualizando valores
    // const updatePlanets = await Planet.findByPk(3)
    // updatePlanets.name = "Marte"
    // await updatePlanets.save()

    // Removendo dados
    // const deletePlanets = await Planet.findByPk(5)
    // console.log(deletePlanets)
    // await deletePlanets.destroy()


    const express = require('express')
    const routes = require('./routes')

    require('../config/associations')

    const app = express()

    app.use(express.json())
    app.use(routes)

    app.listen(3000)
    
    
})();