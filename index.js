// Your code here
class Polygon{
    constructor(sideLength){
        this.sideLength=sideLength
    }
    get countSides(){
        return this.side=this.sideLength.length;
    }
    get perimeter(){
        return this.sum=this.sideLength.reduce((total,value)=>total+value)
    }
}

class Triangle extends  Polygon{
    get isValid(){
        if (this.countSides==3){
            return this.sideLength.every(element=>element===this.sideLength[0])
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides==4){
            return this.sideLength.every(element=>element===this.sideLength[0])
        }
    }
   get area(){
       return this.squareArea=(this.perimeter/4)*(this.perimeter/4)
   } 
}






























// class Polygon{
//     constructor(sideLength){
//         this.sideLength=sideLength;
        
//     }
//     get countSides() {
//         // that counts the number of sides (each index in the array).
//         return this.sides=this.sideLength.length
// }
// get perimeter(){
//             //calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.

//     return this.sum=this.sideLength.reduce((total,value)=>total+value)
// }
// }

// class Triangle extends Polygon{
//     get isValid(){
//                 //checks if the given 3 sides for a triangle is valid

//        if (this.countSides==3){
//                        //check every element in the array if it has equal value

//            return this.sideLength.every(element=>element===this.sideLength[0])
//        }
//     }
    
// }

// class Square extends Polygon{
//     get isValid(){
//         if (this.countSides==4){
//             return this.sideLength.every(element=>element===this.sideLength[0])

//         }
// }
// get area(){
//     return this.squareArea=(this.perimeter/4)*(this.perimeter/4)
// }
// }

