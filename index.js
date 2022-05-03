const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) =>  {
    res.render('about');
})

app.listen(process.env.PORT || 5000);