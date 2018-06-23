// Enemies our player must avoid
var Enemy = function(x,y,FixedNumber) {
    //***Enemy position***
    this.x=x;
    this.y=y;
    //*** FixedNumber for every Enemy to change speeds***
    this.FixedNumber=FixedNumber;
    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
  // *** Update position***
    if(this.x<=505){
      this.x +=(Math.random()*this.FixedNumber*dt);
    }else {
      this.x = -100;
    }

    //***check Collisions***
    if (this.x+60 > player.x && this.x < player.x+40  &&  this.y+40 > player.y && this.y < player.y+60){
    //***when player lose apper sweetalert***
      swal({
          title: "Oops !",
          text: "You Are Lose !",
          icon: "warning",
          button: "Ok",
            });
      //***Reset player position***
          player.resetPlayer();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//***Player Class***
var Player= function(x,y){
  //***Enemy position***
  this.x=x;
  this.y=y;
  this.sprite='images/char-princess-girl.png';

};
Player.prototype.update = function () {
  this.handleInput();

  //***if player reach the water reset the position***
   if(this.y < -54) {
  //***when player Win apper sweetalert***
     swal({
         title: "Awesome !",
         text: "You Are The Winner !",
         icon: "success",
         button: "Ok",
           });
  //***Reset player position***
     this.resetPlayer();
       }
};

Player.prototype.render = function () {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
if(key=='up' && this.y > 0){ // go up and can not go out screen
  this.y -= 90;
}
if(key=='down' && this.y < 380){// go down and can not go out screen
  this.y += 90;
}
if(key=='right'&& this.x < 400){// go right and can not go out screen
  this.x += 100;
}
if(key=='left'&& this.x >0){// go left and can not go out screen
  this.x -= 100;
}
};

Player.prototype.resetPlayer = function () {
  this.x=200;
  this.y=380;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies=[
  new Enemy(0,60,220),
  new Enemy(-600,60,300),
  new Enemy(0,140,190),
  new Enemy(0,220,150),
  new Enemy(-600,220,90)
];

// Place the player object in a variable called player
let player = new Player(200,395);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
