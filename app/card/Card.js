const valueMap = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const colorMap = ["♦", "♠", "♥", "♣"];
const fileColorMap = ["d", "s", "h", "c"];

class Card {
    constructor(index) {
        this.index = index;
        this.value = index % 13;
        this.color = Math.floor(index / 13);
        this.valueLabel = valueMap[this.value];
        this.colorLabel = colorMap[this.color];
        this.skinName = `http://zdep.fr/cards/_${this.valueLabel}${fileColorMap[this.color]}.bmp`;
    }
}

export default Card;