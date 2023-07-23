//Función constructora de ENEMY:
function Enemy(name, type, level) {
    let self = this
    this.name = name
    this.type = type
    this.level = level
    this.health = this.level * 10
    this.strength = this.level * 2
    this.attacklist  //propiedad con la lista de ataques que tendrá cada Pokemon creado.
    this.pp = this.level * 2
    //DIV del Enemy:
    this.enemyImg = document.getElementById("enemy-img")

    switch (this.name) {
        case "Pikachu":
            this.enemyImg.style.backgroundImage = "url(../IMG/ENEMY/PikachuGif.gif)"
            break;
        case "Charmander":
            this.enemyImg.style.backgroundImage = "url(../IMG/ENEMY/CharmanderEnemy.gif)"
            break;
        case "Bulbasaur":
            this.enemyImg.style.backgroundImage = "url(../IMG/ENEMY/BulbasaurEnemy.gif)"
            break;
            

    }

    this.enemyBackImg = document.getElementById("enemy-background-img")
    this.enemyHealth = document.getElementById("enemy-health")

    //DEFINIMOS LOS ATAQUES DE NUESTROS POKEMON EN ARRAY DE OBJETOS
    let fireAttacks = [{
        attackName: "'Galletassso'",
        bonusDamage: this.strength,
        ppMinus: 3,
        attackImage: 'url(./IMG/OTROS/SlapPlacaje.gif)'
    },
    {
        attackName: "Llamarada",
        bonusDamage: this.strength * 2,
        ppMinus: 5,
        attackImage: 'url(./IMG/PLAYER/Fuego.gif)'
    },

    {
        attackName: "Incendio",
        bonusDamage: this.strength * 3,
        ppMinus: 10,
        attackImage: 'url(./IMG/PLAYER/Fuego2.gif)'

    },

    {
        attackName: "Volcán",
        bonusDamage: this.strength * 4,
        ppMinus: 50,
        attackImage: 'url(./IMG/PLAYER/Volcano.gif)'

    }];


    let electricAttacks = [{
        attackName: "'Galletassso'",
        bonusDamage: this.strength,
        ppMinus: 3,
        attackImage: 'url(./IMG/OTROS/SlapPlacaje.gif)'
    }, {

        attackName: "Rayo",
        bonusDamage: this.strength * 2,
        ppMinus: 5,
        attackImage: 'url(./IMG/ENEMY/RayoBien.gif)'

    },

    {
        attackName: "Circulo de Rayos",
        bonusDamage: this.strength * 3,
        ppMinus: 10,
        attackImage: 'url(./IMG/ENEMY/CirculoRayos.gif)'

    },

    {
        attackName: "Tormenta de Rayos",
        bonusDamage: this.strength * 4,
        ppMinus: 20,
        attackImage: 'url(./IMG/ENEMY/TormentaNube.gif)'
    }];

    let leafAttacks = [{
        attackName: "'Galletassso'",
        bonusDamage: this.strength,
        ppMinus: 3,
        attackImage: 'url(./IMG/OTROS/SlapPlacaje.gif)'
    }, {

        attackName: "Hoja venenosa",
        bonusDamage: this.strength * 2,
        ppMinus: 5,
        attackImage: 'url(./IMG/ENEMY/HojaVenenosa.gif)'

    },

    {
        attackName: "Agua Chirri",
        bonusDamage: this.strength * 3,
        ppMinus: 10,
        attackImage: 'url(./IMG/ENEMY/AguaChirri.webp)'

    },

    {
        attackName: "Explosión Verde",
        bonusDamage: this.strength * 4,
        ppMinus: 20,
        attackImage: 'url(./IMG/ENEMY/ExplosionVerde.gif)'
    }];

    //Función que añade los ataques a cada Pokemon dependiendo de su "type":
    this.addAttacks = function () {
        //Implementar un "switch" para poder ampliar las opciones....
        switch (this.type) {
            case "Fire":
                self.attackList = fireAttacks
                break
            case "Electric":
                self.attackList = electricAttacks
                break
            case "Leaf":
                self.attackList = leafAttacks
                break
        }
    }

    //Función para checkear la salud y no permitir que baje de 0:
    this.checkHealth = function () {
        if (this.health > 0) {
            this.health = this.health
        } else {
            this.health = 0
        }
    }

    //ATAQUE ALEATORIO DEL ENEMIGO.     
    this.attackRandom = function (Player) {
        let randomNum = Math.floor(Math.random() * this.attackList.length)
        if (this.pp >= this.attackList[randomNum].ppMinus) {
            Player.health -= this.attackList[randomNum].bonusDamage
            this.pp -= this.attackList[randomNum].ppMinus
            Player.playerBackImg.style.backgroundImage = this.attackList[randomNum].attackImage
            setTimeout(function () {
                Player.playerBackImg.style.backgroundImage = ""
            }, 3000)
            this.attackInfo = this.name + " lanza ataque *" + this.attackList[randomNum].attackName + "* a " + Player.name + " y le causa -" + this.attackList[randomNum].bonusDamage + " puntos de daño!!!"
        }
    }
}

export { Enemy }