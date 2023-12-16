let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let path = require('path');
let bodyParser = require('body-parser'); // Add this line
let mongoose = require('mongoose');
let methodOverride = require("method-override");
let postRoutes = require('./routes/blogRoutes');

require("dotenv").config();

let db = 'mongodb+srv://olenkazozuliakk:54321@olenka.go7emjn.mongodb.net/Node-blog';
mongoose.connect(db);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(postRoutes);

app.get('/', (req, res) => {
    res.render("index", { title: 'main page' });
});

app.get('/add-post', (req, res) => {
    res.render("add-post", { title: 'Add post' });
});

app.post("/add-post", (req, res) => {
    
    let { title, author } = req.body;
    let post = new Post({ title, author});
    post
     .save()
     .then(() => res.redirect("/posts"))
     .catch((error) => {
        console.log(error);
        res.render("error");
     });
});

app.get("/posts", (req, res) => {
    Post.find()
      .then((posts) => res.render("posts", { title: "Posts", posts }))
      .catch((error) => {
        console.log(error);
        res.render("error");
      });
  });

  app.get("/edit-post/:id", (req, res) => {
    let id = req.params.id;
    Post.findById(id)
      .then((post) =>
        res.render("edit-post", { title: post.title, id: post._id, post })
      )
      .catch((error) => {
        console.log(error);
        res.render("error");
      });
  });

  app.put("/edit-post/:id", (req, res) => {
    let id = req.params.id;
    const { title, author } = req.body;
    Post.findByIdAndUpdate(id, { title, author })
      .then(() => res.redirect(`/posts`))
      .catch((error) => {
        console.log(error);
        res.render(createPath("error"));
      });
  });
  
  app.delete("/posts/:id", (req, res) => {
    let id = req.params.id;
    Post.findByIdAndDelete(id)
      .then((posts) => res.render("posts", { title: "Posts", posts }))
      .catch((error) => {
        console.log(error);
        res.render("error");
      });
  });


async function start() {
    try{
        await mongoose.connect(db);
        console.log(`Connection to MongoDb is success!`);
        app.listen(PORT, ()=> {
            console.log(`Server is listening PORT ${PORT}...
            `);
        });
    } catch (error) {
        console.log("\n Connection error!!!\n\n", error);
    }
}

start();
