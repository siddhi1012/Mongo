// getting-started.js
const mongoose = require('mongoose');

main().then(() =>{
    console.log("Connection Successful...");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User",userSchema);
User.findByIdAndUpdate("694c98c4c873d92c887655a1",{age: 50},{new:true})
.then((res) =>{
  console.log(res);
}).catch((err) =>{
  console.log(err);
});


// User.find({age:{$gt : 20}})
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })


// User.insertMany([
//   {
//     name : "Prasad", 
//     email: "prasad@gmail.com", 
//     age:22

//   },
//   {
//     name : "Prasad", 
//     email: "prasad@gmail.com", 
//     age:23
//   },
//   {
//     name : "sakshi", 
//     email: "sakshi@gmail.com", 
//     age:23
//   }
// ]).then((res) =>{
//   console.log(res);
// })
// const user1 = new User({
//   name : "siddhi", 
//   email: "siddhi@gmail.com", 
//   age:23
// });

// const user2 = new User({
//   name : "Prasad", 
//   email: "prasad@gmail.com", 
//   age:23
// });
// user2.save()
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })

