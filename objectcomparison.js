let obj1={name:"person 1",age:5};
 let obj2={age:5,name:"person 1"};
 //console.log(Object.keys(obj1).sort());

 function compareJSON(){
 let A=Object.keys(obj1).length ;
 let B=Object.keys(obj2).length ;

 if(A !==B){
               return false;
 }
 for(var key in obj1){
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj1[key]){
        return false;

    }else{
        return true;
    }
 }
}
console.log(compareJSON());



 