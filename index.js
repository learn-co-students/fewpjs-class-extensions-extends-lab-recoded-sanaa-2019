// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr
    }
    get countSides (){
    return this.arr.length
    }
    get perimeter (){
        return this.arr.reduce(function(res,val){
            return res = res + val
        }, 0 );
        
    }
}
class Triangle extends Polygon{
 get isValid (){
 return   (this.arr[0] + this.arr[1]) >this.arr[2] && (this.arr[1] + this.arr[2]) >this.arr[0] && (this.arr[0] + this.arr[2]) >this.arr[1] ;
 }
}
class Square extends Polygon{
    get isValid(){
        return this.arr[0]==this.arr[1] && this.arr[2]==this.arr[0]&& this.arr[3]==this.arr[0];
    }
    get area(){
        if(this.isValid){
            return this.arr[0] * this.arr[0] 
        }
    }
}