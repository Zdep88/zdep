const mathsController = {
    randomBoolean(req, res) {
        const value = Boolean(Math.floor(Math.random() * 2));
        res.json({ prompt: "Random boolean", value });
    },

    randomDice(req, res) {
        const value = Math.floor(Math.random() * 6) + 1;
        res.json({ prompt: "Random dice 6", value });
    },

    randomDice20(req, res) {
        const value = Math.floor(Math.random() * 20) + 1;
        res.json({ prompt: "Random dice 20", value });
    }
}

export default mathsController;