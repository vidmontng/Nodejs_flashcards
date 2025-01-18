const express = require('express');
const router = express.Router();

const { data } = require('../data/flashcardData.json');
const { cards } = data;




router.get('/', (req, res) => {
    const numberOfCards = cards.length;
    const flashcardId = Math.floor(Math.random() * numberOfCards);
    
    res.redirect(`/cards/${flashcardId}`);
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    let side = req.query.side;
    const {hint} = cards[id];
    const text = cards[id][side];
    let templateData;
    const name = req.cookies.username;

    if (side==="answer") {
        side = "question";
        templateData = {text, side, id, name};
       } else if (side==="question"){
        side = "answer";
        templateData = {text, side, id, hint, name};
       } else if (!side) {
        res.redirect(`/cards/${id}/?side=question`);
       } else if (side === "hint") {
        templateData = {hint};

       }

    res.render('card', templateData);
});






module.exports = router;


