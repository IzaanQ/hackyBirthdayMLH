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

const Platform { 
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.width = 200
        this.width = 200
}
    
draw() {
    c.fillRect()
}

}

const player = new Player()
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

    if (keys.right.pressed) {
        player.velocity.x = 5
    }

    else if (keys.left.pressed) {
        player.velocity.x = -5
    }

    else { 
        player.velocity.x = 0
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