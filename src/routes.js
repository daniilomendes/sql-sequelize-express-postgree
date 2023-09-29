const express = require('express')
const routes = express.Router()

const PlanetController = require('../controller/PlanetController')
const SateliteController = require('../controller/SateliteController')
const CapController = require('../controller/CapController')
const SpaceshipController = require('../controller/SpaceshipController')


routes.post("/planets", PlanetController.store)
routes.get("/planets", PlanetController.index)
routes.put("/planets/:id", PlanetController.put)
routes.delete("/planets/:id", PlanetController.delete)

routes.post("/planets/:planetId/satelites", SateliteController.store)
routes.get("/planets/:planetId/satelites", SateliteController.index)



routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);


routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);


module.exports = routes