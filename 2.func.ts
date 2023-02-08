function addfive(num:number)
{
    // return num+2;
    return "hello";  // no one is stopping this function to return any type
}
// so we have to explicitly tell the return type and then it will be type checked

function addsix(num:number) :number
{
    return num+2;
    // return "kjdcj"// gives error
}

//arrow function

const sayhello=(flag:boolean):string=>{
    if(flag)
    return "hello";

    return "goOut";
}


//-----------------------------
const User={
    name: "krk",
    age : 15,
    isPaid:true
}
type User={
    name: string,
    age : number,
    isPaid:boolean
}
function createUser({name: string ,age:number }) :User{
    // return 5, true, "hello"
    // it can return anything but when we tell what type it must return
    // we make obj,string,val or whatever we want is to return 
    // return {1,2,3}  XXXX
    return {name:"kd",age:7,isPaid:false};


}

export{}