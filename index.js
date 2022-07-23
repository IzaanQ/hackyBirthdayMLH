const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5
class Player { 
    constructor() { 
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }
    draw() { 
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() { 
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Platform { 
    constructor() {
        this.position = {
            x: 200,
            y: 300
        }
        this.width = 200
        this.height = 20
}
    
draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
}

}

const player = new Player()
const platform = new Platform()

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};


function animate() { 
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
    platform.draw()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    }

    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    }

    else { 
        player.velocity.x = 0

        if (keys.right.pressed) {
            platform.position.x -= 5
        }

        else if (keys.left.pressed) { 
            platform.position.x += 5
        }    

    }

    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0 
    }
}

animate()

addEventListener('keydown', ({ keyCode }) => { 
    switch (keyCode) { 
        case 37:
            keys.left.pressed = true;
            break
    }
    switch (keyCode) {
      case 38:
        player.velocity.y -= 15
        break;
    }
    switch (keyCode) {
      case 39:
        keys.right.pressed = true
        break;
    }
    switch (keyCode) {
      case 40:
        console.log("down");
        break;
    }
})

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;
  }
  switch (keyCode) {
    case 38:
      break
  }
  switch (keyCode) {
    case 39:
      keys.right.pressed = false;
      break;
  }
  switch (keyCode) {
    case 40:
      console.log("down");
      break;
    }
});