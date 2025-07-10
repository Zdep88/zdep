import Card from "../class/Card.js";

const cardController = {
    randomCard(req, res) {
        const randomIndex = Math.floor(Math.random() * 52)
        const card = new Card(randomIndex);
        res.json(card);
    }
}

export default cardController;