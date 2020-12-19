class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    // creating an empty array to store the positions where the bird has moved
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    // storing the positions only when the velocity and the position of the bird is above a threshold
    // else there would be too much smoke, even after the bird has stopped 
    if(this.body.velocity.x>10 && this.body.position.x>200){
      // getting the x and y position of the bird for each frame
      var position = [this.body.position.x, this.body.position.y];
      // storing the positions as an array inside the trajectory array
      this.trajectory.push(position);
    }
    
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
