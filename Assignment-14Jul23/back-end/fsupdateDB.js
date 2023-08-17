let express=require("express");
let app=express();
let PORT=process.env.PORT;
let fs=require("fs");

const {credentials}=require("./database");
const {userData}=require("./database");
console.log(credentials);
console.log(userData);

// function updateUserData(){
//     console.log(credentials);
//     credentials.username="jack"; //updating username in credentials
//     console.log(credentials);
//     console.log(JSON.stringify(credentials));

//     console.log(userData);
//     userData.username="Jack"; //updating username in userData
//     console.log(userData);
//     console.log(JSON.stringify(userData));

//     const finalString=
//     "credentials=" +
//     JSON.stringify(credentials) + ";" +  "\n"
//     +
//     "userData=" +
//     JSON.stringify(userData)+ ";" + "\n"
//     +
//     "module.exports = { credentials, userData };";
//     console.log("F="+finalString);
 
//     // updating  userData or writing the finalString to database.js
//     fs.writeFile("./database.js", finalString, (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("updated");
//         }
//     })
// }

exports.updateUserData=function(updateData){
    console.log(credentials);
    // credentials.username="jack"; //updating username in credentials
    // console.log(credentials);
    // console.log(JSON.stringify(credentials));

    console.log("before updation:" + userData);
    console.log("after updation:" + updateData);
    console.log(updateData.username);
    userData.username=updateData.username; //updating username in userData
    userData.phone=updateData.phone; 
    userData.city=updateData.city; 
    userData.role=updateData.role;
    userData.organization=updateData.organization;    
    // userData=updateData;  //updating updated user Data in on database.js userData , in this way after editing and updating the default property iat is also coming, need to check this
    
    console.log("after updation, now the userData in DB is:" + userData);
    console.log(JSON.stringify(userData));

    // adding the updatedData to final String so that we can write on database.js
    const finalString=
    "credentials=" +
    JSON.stringify(credentials) + ";" +  "\n"
    +
    "userData=" +
    JSON.stringify(userData)+ ";" + "\n"
    +
    "module.exports = { credentials, userData };";
    console.log("F="+finalString);
 
    // updating  userData or writing the finalString to database.js
    fs.writeFile("./database.js", finalString, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updated");
        }
    })
}