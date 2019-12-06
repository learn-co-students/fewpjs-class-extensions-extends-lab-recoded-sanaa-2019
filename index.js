// Your code here
class Polygon {
    constructor(num){
        this.num = num
    }
    get countSides (){
    return this.num.length
    }
    get perimeter (){
        return this.num.reduce(function(result,value){
            return res = result + value
        }, 0 );

    }
}
class Triangle extends Polygon{
 get isValid (){
 return   (this.num[0] + this.num[1]) >this.num[2] && (this.num[1] + this.num[2]) >this.num[0] && (this.num[0] + this.num[2]) >this.num[1] ;
 }
}
class Square extends Polygon{
    get isValid(){
        return this.num[0]==this.num[1] && this.num[2]==this.num[0]&& this.num[3]==this.num[0];
    }
    get area(){
        if(this.isValid){
            return this.num[0] * this.num[0] 
        }
    }
} 