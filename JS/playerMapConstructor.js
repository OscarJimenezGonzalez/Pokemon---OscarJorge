//Función constructora de "Player":
function PlayerMap(name, obstacle) {
    let self = this;
    this.name = name;
    this.height = 30;
    this.width = 30;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 5;
    this.sprite = document.createElement("div");
    this.sprite.setAttribute("id", "player");
    this.sprite.style.height = this.height + "px";
    this.sprite.style.width = this.width + "px";
    this.sprite.style.backgroundImage = "url(../IMG/MAP/playerUp.png)"
    this.sprite.style.backgroundSize = "80%";
    this.sprite.style.backgroundRepeat = "no-repeat";
    // this.sprite.style.backgroundColor = "blue";
    this.sprite.style.backgroundImage


    //Atributo para rastrear colisiones:
    this.movementSwitch = true;

    // Método para insertar al personaje en unas coordenadas concretas del tablero ("parent"):
    this.insertPlayer = function (x, y, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        parent.appendChild(this.sprite);
        this.sprite.style.position = "absolute";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.top = this.y + "px";
    };

    // Métodos de movimiento del personaje en el eje X
    this.movePlayerX = function () {
        let newX = self.x + self.speed * self.directionX;

        if (!self.checkCollisionX(newX) && newX >= 0 && newX + self.width <= 900) {
            self.x = newX;
            self.sprite.style.left = self.x + "px";
        }
    }

    // Métodos de movimiento del personaje en el eje Y 
    this.movePlayerY = function () {
        let newY = self.y + self.speed * self.directionY;
        if (!self.checkCollisionY(newY) && newY >= 0 && newY + self.height <= 700) {
            self.y = newY;
            self.sprite.style.top = self.y + "px";
        }
    }

    this.checkCollisionX = function (newX) {

        for (let i = 0; i < obstacle.length; i++) {

            if (
                self.y + self.height >= obstacle[i].y &&
                self.y <= obstacle[i].y + obstacle[i].height &&
                newX + self.width >= obstacle[i].x &&
                newX <= obstacle[i].x + obstacle[i].width) {

                console.log("Obstaculo!")
                return true;
            }
        }

    }

    this.checkCollisionY = function (newY) {

        for (let i = 0; i < obstacle.length; i++) {

            if (
                newY + self.height >= obstacle[i].y &&
                newY <= obstacle[i].y + obstacle[i].height &&
                self.x + self.width >= obstacle[i].x &&
                self.x <= obstacle[i].x + obstacle[i].width) {

                console.log("Obstaculo!")
                return true;

            }

        }

    }
}

export { PlayerMap }