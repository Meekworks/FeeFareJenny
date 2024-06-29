const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/payment', (req, res) => {
    const amaount = req.body.amaount;
    const paymentMethod = req.body.paymentMethod;
    //process payment here.

    res.send('payment made: $$ {amount} using ${paymentMethod}')
});

app.listen(port, () => {
    console.log('server listening on port ${port}')
});