import Card from "../class/Card.js";

const cardController = {
    randomCard(req, res) {
        const randomIndex = Math.floor(Math.random() * 52)
        const card = new Card(randomIndex);
        res.json(card);
    },

    allCards(req, res) {
        const deck = [];
        for (let index = 0; index < 52; index++) {
            deck.push(new Card(index));
        }
        res.json(deck);
    }
}

export default cardController;