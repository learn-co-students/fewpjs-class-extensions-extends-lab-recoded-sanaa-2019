// Your code here
class Polygon{
    constructor(sideArray){
        this.sideArray=sideArray;
    }
    get countSides(){
        return this.sideArray.length
    }
    get perimeter(){
        return this.sideArray.reduce((m,d)=>m+=d)
    }
}


class Triangle extends Polygon{
    get isValid(){
 if(this.countSides==3){
 if ((this.sideArray[0]+this.sideArray[1])>this.sideArray[2]&&(this.sideArray[0]+this.sideArray[2])>this.sideArray[1]&&(this.sideArray[1]+this.sideArray[2])>this.sideArray[0]&&(this.sideArray[0]+this.sideArray[1]+this.sideArray[2])>this.sideArray[2])
   {
       return true;
   }
    else{return false;}  
      
            }
    else{
        return "not valid"
    }
    
    }
}


class Square  extends Polygon{
    get isValid()
    {
        if(this.countSides==4){

        if((this.sideArray[0]==this.sideArray[1])&&(this.sideArray[0]==this.sideArray[2])&&(this.sideArray[0]==this.sideArray[3])&&(this.sideArray[1]==this.sideArray[2])&&(this.sideArray[1]==this.sideArray[3])&&(this.sideArray[2]==this.sideArray[3])){
            return true;

        }
        else{
            return false;
        }
        }
        else{
            return "not valid";
        }

        }
        get area(){
            if(this.isValid){
                let arr= this.sideArray[0]*this.sideArray[1];
                return arr;
        }
        else{
            return "not a square"
        }
    }
    
    }
