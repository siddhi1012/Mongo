const mongoose = require('mongoose');

main().then(() =>{
    console.log("Connection Successful...");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const booksSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
    },
    discount : {
        type : Number,
        default : 0,
    }
});

const Book = mongoose.model("Book", booksSchema);

const book1 = new Book({ 
    title: "Gone Girl",
    price: 399
});
book1.save()
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});