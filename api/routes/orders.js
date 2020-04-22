const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get orders'
    })
});
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'Post orders',
        createdOrder: order
    })
})
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if(id === '1'){
        res.status(200).json({
            message: 'Post request successful',
            id: id
        })
    }else {
    res.status(200).json({
        message: 'Post products'
    });
};
})


module.exports = router;