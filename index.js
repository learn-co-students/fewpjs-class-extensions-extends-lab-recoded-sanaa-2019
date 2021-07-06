// Your code here
class Polygon {
  constructor(array){
    this.array=array;
  }
  get countSides(){
    return this.array.length;
  }
  get perimeter(){
    return this.array.reduce((total,start)=>total+start);
  }
  
}
class Triangle extends Polygon{

    get isValid(){
        //checks if the given 3 sides for a triangle is valid
        if (this.countSides == 3) {

            //check every element in the array if it has equal value
            return this.array.every( e => e === this.array[0] )
          }
    }
}
class Square extends Polygon{
  get isValid(){
    if(this.countSides==4)
    {
      return this.array.every( e => e === this.array[0] );
    }
  }
  
  get area(){
    return this.array[0]* this.array[0];
  }
}