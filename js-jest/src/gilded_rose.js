class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        const itemRules = {
            'Aged Brie': {
                qualityChange:  (item) => {
                    if (item.sellIn <= 0) {
                        return 2;
                    } else {
                        return 1;
                    }
                },
                sellInChange: -1,
                maxQuality: 50,
            },
            'Backstage passes to a TAFKAL80ETC concert': {
                qualityChange: (item) => {
                    if (item.sellIn <= 0) {
                        return -item.quality;
                    } else if (item.sellIn <= 5) {
                        return 3;
                    } else if (item.sellIn <= 10) {
                        return 2;
                    } else {
                        return 1;
                    }
                },
                sellInChange: -1,
                maxQuality: 50
            },
            'Sulfuras, Hand of Ragnaros': {
                qualityChange: (item) => 0,
                sellInChange: 0,
                maxQuality: 80
            },
            'Conjured': {
                qualityChange: (item) => {
                    if (item.sellIn <= 0) {
                        return -4;
                    } else {
                        return -2;
                    }
                },
                sellInChange: -1,
                maxQuality: 50
            },
            'default': {
                qualityChange: (item) => {
                    if (item.sellIn <= 0) {
                        return -2;
                    } else {
                        return -1;
                    }
                },
                sellInChange: -1,
                maxQuality: 50
            }
        }
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const itemRule = itemRules[item.name] || itemRules['default'];
            item.quality = Math.min(itemRule.maxQuality, item.quality + itemRule.qualityChange(item));
            item.quality = Math.max(0, item.quality);
            item.sellIn = item.sellIn + itemRule.sellInChange;
        }

        return this.items;
    }
}

module.exports = {
    Item,
    Shop
}
