// Your code here

class Polygon{
    constructor(array){

        this.array =array
    }

    get countSides(){
        // that counts the number of sides (each index in the array).
       return this.sides = this.array.length
    }

    get perimeter(){
        //calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.
    
        return this.sumSides = this.array.reduce((total,value) => total+value)
    
    }
}

class Triangle extends Polygon{

    get isValid(){
        //checks if the given 3 sides for a triangle is valid
        if (this.countSides == 3) {

            //check every element in the array if it has equal value
            return this.array.every( element => element === this.array[0] )

       
          }
    }


}

class Square extends Polygon{

    get isValid(){
        //checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal

        if (this.countSides == 4) {

            //check every element in the array if it has equal value
            return this.array.every( element => element === this.array[0] )

       
          }

    }

    get area(){
        //calculates the area of the square
      return this.sqrArea = (this.perimeter/4)*(this.perimeter/4)
    }


}
