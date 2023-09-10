let jsonObj={name:"person 1",age:5};
 let jsonObj1={age:5,name:"person 1"};

var obj = Object.keys(jsonObj);
const compareObj=()=>{

if(Object.keys(jsonObj).length === Object.keys(jsonObj1).length){
    // for...of...{} method
for(const element of obj){
    if(jsonObj.hasOwnProperty(element)===jsonObj1.hasOwnProperty(element)){
        console.log(`${true}`);
    }
    else{
        console.log(false);    }
}

}else{
    console.log("not equal");
}

}
compareObj();
