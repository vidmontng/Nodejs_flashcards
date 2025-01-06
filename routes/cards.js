const express = require('express');
const router = express.Router();

const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    const id = req.params.id;
    let side = req.query.side;
    const {hint} = cards[id];
    const text = cards[id][side];
    let templateData;

    if (side==="answer") {
        side = "question";
        templateData = {text, side, id};
       } else {
        side = "answer";
        templateData = {text, side, id, hint};
       }

    res.render('card', templateData);
});

module.exports = router;


