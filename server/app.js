const express = require('express')
const app = express()
const ItemsRouter = require('./routers/ItemRouter');


app.use(express.static('./public'));
app.use(express.json());

// routes


app.use('/item', ItemsRouter);




const port = 5000;
const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();