const mathsController = {
    randomBoolean(req, res) {
        const v = Boolean(Math.floor(Math.random() * 2));
        res.json({ prompt: "Random boolean", value: v });
    },
}

export default mathsController;