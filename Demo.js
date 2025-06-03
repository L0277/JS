console.log('Project Setup')
console.log('login page feature')
console.log("sdfghjkhgfg")

const userData=[
{
    name:"Liza 1",
    age:21,
    hasPassedOut:false,
    occupation: undefined,
},
{
    name:"Liza 2",
    age:22,
    hasPassedOut:false,
    occupation:"intern",
},{
    name:"Liza 3",
    age:23,
    hasPassedOut:true,
    occupation:"swe",
}
]

const apiResponse={
    statusCode:200,
    message:"user data eached successfully",
    data:userData
}

const getUserName=()=>{
    if(apiResponse.statusCode===200){
        const result= apiResponse.data
        .filter((user)=>user.occupation)
        .map((user)=> user.name)
        return result
    }
    return[]
}
console.log(getUserName())

