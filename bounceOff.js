function bounceOff(a,b){ //parameters
    if(a.x-b.x < b.width/2 + a.width/2 && b.x - a.x < b.width/2 + a.width/2){
      //one.velocityX=one.velocityX*(-1);
      //two.velocityX=two.velocityX*(-1);
      a.velocityX *= (-1);
      b.velocityX *= (-1);
    }
  
    if(a.y - b.y < b.height/2 + a.height/2 && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY *= (-1);
      b.velocityY *= (-1);
    }
  }