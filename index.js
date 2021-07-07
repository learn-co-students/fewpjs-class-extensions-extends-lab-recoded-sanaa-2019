// Your code here
class Polygon {
  constructor(a) {
    this.a = a;
  }

  get countSides(){
    return this.a.reduce((acc)=>{
      return acc+1;
    },0);
  }

  get perimeter(){
    return this.a.reduce((acc,cur,i)=>{
      return acc + cur;
    },0);
  }
}

class Triangle extends Polygon {
  get isValid(){
    if((this.a[0] + this.a[1]) > this.a[2] && (this.a[1] + this.a[2]) > this.a[0] && (this.a[0] + this.a[2]) > this.a[1]){
      return true
    }else{
      return false
    }
  }
}


class Square extends Polygon {
  get isValid(){
    if(this.a[0] === this.a[1]  && this.a[1] === this.a[2] && this.a[2] === this.a[3]){
      return true
    }else{
      return false
    }
}

get area(){
  return this.a[0] * this.a[0];
}
}