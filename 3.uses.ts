type User={
    readonly id:string,  // readonly let it not be manipulated by the user
    name: string,
    age? : number, //? states that is is optional
    isPaid:boolean
}

let u: User ={
    id:"123",  // now it is defined
    name: "krk",
    // age: 12, 
    isPaid:true
} 
u.name="khan sir"; //allowed
// u.id="kljcn" NOT AlloWED


//-----------
const hero =["spider"]//  either initialize
const age:number[]=[]  //tell that number type li string h

hero.push("nqwidn")

export{}