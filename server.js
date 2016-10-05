//used to create the web server
var express = require('express');
//output logs
var morgan = require('morgan');

var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
    title:'Article One',
    heading:'Noob heading',
    date:'Sep 05 16',
    content:` <p>Welcome to article-one</p>
              <p>Its was great hanging out with you!</p>`
};

function createTemplate(data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate =
`<html>
    <head>
        <title>
            ${title}
        </title>
    <meta name="viewport" content="width-device-width, initial-scale-1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div  class="container">
            <div>
                <a href="/">HOME</a>
            </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <p>${date}</p>
            <div>
                October,1,2016
            </div>
            <div>
                ${content}
                <hr/>
            </div>
        </div>
    </body>
</html>`;

    return htmlTemplate;
    
};




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-three',function(req,res)
{res.sendFile(path.join(__dirname, 'ui', 'article-three.html'))}
);

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
