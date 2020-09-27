class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255 ; 
  }
display(){
if(this.body.speed<3){
  super.display();
}
else{
push()
this.visibility = this.visibility-2;
tint(255,this.visibility)
image(this.image,810,220,50,50)
pop()
World.remove(world,this.body);
}


}
};