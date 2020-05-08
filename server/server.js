const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

if(process.env.NODE_ENV === 'production'){
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('*',(req, res, next) => {
    res.status(404).send('YOU TRIED A NON EXISTENT PATH')
})
  
  
app.listen(PORT, ()=> console.log('listening on port 3000'))
module.exports = app;