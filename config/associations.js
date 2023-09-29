const Planet = require('../models/Planet')
const Satelite = require('../models/Satelite')
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

// Associação de 1 para 1(1 planeta pode ter 1 satelite e 1 satelite pode ter 1 planeta)
// Planet.hasOne(Satelite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
// Satelite.belongsTo(Planet, {foreingKey: 'planetId', as: 'planet'})

// Associação de 1 para muitos(1 planeta pode ter varios satelites e 1 satelite só pode ter 1 planeta)
Planet.hasMany(Satelite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Satelite.belongsTo(Planet, {foreingKey: 'planetId', as: 'planet'})


// Associação de muitos para muitos
Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships",
});
  
Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps",
});


module.exports = {Planet, Satelite, Cap, Spaceship}