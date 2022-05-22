const express = require('express');
// const { render } = require('express/lib/response');

const app = express();
const PORT = 80;
app.set('view engine','hbs');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/project/add', (req, res) => {
  res.render('project');
})

app.post('/project/add',(req,res)=>{
  const data = req.body;
  console.log(data);
})
action="/project/add"

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('/project/detail', (req, res) => {
  res.render('project-detail');
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });