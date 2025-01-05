const express = require('express');
const router = express.Router();

const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const side = req.query.side;
    const {hint} = cards[id];
    const text = cards[id][side];
    let templateData;

    if (side==="answer") {
        templateData = {text};
       } else {
        templateData = {text, hint};
       }

    res.render('card', templateData);
});

module.exports = router;


