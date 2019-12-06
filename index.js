// Your code here
class Polygon {
    constructor(sides){
        this.sides=sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter (){
        let p=0;
        for(let e of this.sides){
            p+=e;
        }
        return p;
    }
}

/* let square=new Polygon([1,1,1,1])
console.log(square.sides)
console.log(square.countSides)
console.log(square.perimeter) */

class Triangle extends Polygon{
    get isValid(){
        let arr=this.sides;
        if(this.countSides==3&&(arr[0]<arr[1]+arr[2]&&arr[1]<arr[0]+arr[2]&&arr[2]<arr[1]+arr[0])){
            return true;
        }
        else return false;
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.sides[0]===this.sides[1]&&this.sides[0]===this.sides[2]&&this.sides[0]===this.sides[3]&&this.countSides===4){
            return true;
        }
        else return false;
    }
    get area(){
        if(this.isValid===true){
            return this.sides[0]**2;
        }
    }
}