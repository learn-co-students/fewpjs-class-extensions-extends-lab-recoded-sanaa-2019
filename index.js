// Your code here
class Polygon {
    constructor(sidesArr){
        this.sidesArr = sidesArr
    }
    get countSides (){
    return this.sidesArr.length
    }
    get perimeter (){
        return this.sidesArr.reduce(function(acc , curr){
            return acc = acc+ curr
        }, 0 );
        
    }
}
class Triangle extends Polygon{
 get isValid (){
 return   (this.sidesArr[0] + this.sidesArr[1]) >this.sidesArr[2] && (this.sidesArr[1] + this.sidesArr[2]) >this.sidesArr[0] && (this.sidesArr[0] + this.sidesArr[2]) >this.sidesArr[1] ;
 }
}
class Square extends Polygon{
    get isValid(){
        return this.sidesArr[0]==this.sidesArr[1] && this.sidesArr[2]==this.sidesArr[0]&& this.sidesArr[3]==this.sidesArr[0];
    }
    get area(){
        if(this.isValid){
            return this.sidesArr[0] * this.sidesArr[0] 
        }
    }
}
