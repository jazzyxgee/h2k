const express = require("express");
const mysql = require("mysql");

const app = express();
const pool = require("./dbpool.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) =>  {
    res.render('about');
})
/*
app.get('/post', (req, res) =>  {
    res.render('post');
})*/
app.get('/blog', async (req, res) =>  {
    
    let sql = `SELECT postId, title, user, category, date, himg
                FROM blog_posts`;
    let rows = await executeSQL(sql);

    res.render("blog", { "posts": rows });

})
app.get('/searchByKeyword', async (req, res) => {

    let userKeyword = req.query.keyword;
    console.log(userKeyword);
  
    let sql = `SELECT postId, title, user, category, date, vimg
              FROM blog_posts
              WHERE title LIKE ? `;
  
    let params = [`%${userKeyword}%`];
    let rows = await executeSQL(sql, params);
  
    res.render("results", { "posts": rows });
  
});
app.get('/post', async (req, res) => {

    let postId = req.query.postId;
    let sql = `SELECT *
              FROM blog_posts
              INNER JOIN blog_assests
              ON blog_posts.postId = blog_assests.postId
              WHERE blog_posts.postId = ? `;

    let rows = await executeSQL(sql, [postId]);
    res.render("post", { "post": rows });
  
});
app.get('/searchByCategory', async (req, res) => {

    let userCategory = req.query.category;
    console.log(userCategory);
  
    let sql = `SELECT postId, title, user, category, date, vimg
              FROM blog_posts
              WHERE category LIKE ? `;
  
    let params = [`%${userCategory}%`];
    let rows = await executeSQL(sql, params);
  
    res.render("results", { "posts": rows });
  
});

/*
app.get('/api/post/:id', async (req, res) => {

    let postId = req.params.id;
    let sql = `SELECT *
              FROM blog_posts
              WHERE postId = ? `;

    let rows = await executeSQL(sql, [postId]);
    res.send(rows)
  
});*/


/** sql test and functions */
app.get("/dbTest", async function(req, res){
    let sql = "SELECT * FROM blog_posts";
    let rows = await executeSQL(sql);
    res.send(rows);
});
// executeSQL
async function executeSQL(sql, params){
    return new Promise (function (resolve, reject) {
    pool.query(sql, params, function (err, rows, fields) {
        if (err) throw err;
            resolve(rows);
        });
    });
}

app.listen(process.env.PORT || 5000);