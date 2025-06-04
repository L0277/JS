const customer=[
    {
    custID:1,
    name:"riyana",
    bought: [
        { id: 1, name: "nailpolish"},
        { id: 2, name: "shoes"},
    ],
},
{
   custID:2,
    name:"Liza",
    bought: [
        { id: 3, name: "bottle"},
        { id: 4, name: "copy"},  
    ],
},
{
   custID:3,
    name:"Prabin",
    bought: [
        { id: 8, name: "whiskey"},
        { id: 5, name: "Hairclip"},  
    ], 
},
{
    custID:1,
    name:"Basanta",
    bought: [
        { id: 6, name: "Guitar"},
        { id: 7, name: "cocaine"},  
    ],
},
];

const customerResponse={
    status: 200,
    message: "customer fetched successfully",
    data: customer,
};
const getProductName=()=> {
    if (customerResponse.status === 200){
        let boughtItem=[]
        customerResponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                boughtItem.push(item.name)
            });
        });
        return boughtItem
    }
};
// console.log(getProductName());

const getProductNumber=()=>{
    if(customerResponse.status === 200){
        let ProductNumbers= {};
        customerResponse.data.forEach((customer) =>{
            customer.bought.map((item) =>{
                {
                    if (ProductNumbers[item.id]){
                        ProductNumbers[item.id] += 1;
                    } else {
                        ProductNumbers[item.id] = 1;
                    }
                }
            });
        });
        return ProductNumbers
}
};
console.log(getProductNumber())

// data={
//     lipsticks: 2,
//     nailpolish: 2,
//     shoes: 1,
// }


