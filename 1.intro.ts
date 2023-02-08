let greet :string ="Namaste"
// greet =5  type is wrong 
let num=6
greet.toUpperCase();
// num.toUpperCase(); not allowed as uppercase is not porperty of Number
// krk : string = "hfb"; wrong XXX
// string nme =kjc XXX

// num="kjnce"   here typescript KNOWS that is is number and no need to explicitly tell
//               SMART LANGUAGE

console.log("We only use '''' : type '''' when we dont assign value immediately and is ")
console.log("to be assigned later . the only we tell at strting the type of Variable ")
//otherwise 'any' is assigned which means Dont TypeCheck that variabe.
console.log(greet)

// function addfive(num)
function addfive(num:number)
{
    return num+2;
}
// addfive("5")
addfive(5);

export{}