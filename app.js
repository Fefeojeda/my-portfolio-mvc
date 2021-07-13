const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, () =>{
    console.log('Servidor funcionando');
})

const homeRouter = require('./routes/main');

app.use('/',homeRouter);
app.use('/about',homeRouter);