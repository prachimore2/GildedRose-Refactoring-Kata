const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function () {
    it("should foo", function () {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
    });

    // Add more tests here to cover all the cases
    it("should reduce the sellIn value by 1 on updateQuality", function () {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
    });

    it("should reduce the quality value by 1 on updateQuality", function () {
        const gildedRose = new Shop([new Item("foo", 2, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(4);
    });

    it("should reduce the quality value by 2 on updateQuality when sellIn is 0 or negative", function () {
        const gildedRose = new Shop([
            new Item("foo", 0, 5),
            new Item("foo", -1, 9)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(3);
        expect(items[1].quality).toBe(7);
    });

    it("should reduce the quality value by 2 on updateQuality when sellIn is negative", function () {
        const gildedRose = new Shop([
            new Item("foo", -1, 5),
            new Item("foo", -2, 9)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(3);
        expect(items[1].quality).toBe(7);
    });

    it("should not reduce the quality value below zero on updateQuality no matter what the sellIn value is", function () {
        const gildedRose = new Shop([
            new Item("foo", 0, 0),
            new Item("foo", 1, 0),
            new Item("foo", -1, 0)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
        expect(items[1].quality).toBe(0);
        expect(items[2].quality).toBe(0);
    });

    it("should increase the quality value by 1 on updateQuality when the item is Aged Brie", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 2, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(1);
        expect(items[0].quality).toBe(6);
    });

    it("should increase the quality value by 2 on updateQuality when the item is Aged Brie and sellIn is 0 or negative", function () {
        const gildedRose = new Shop([
            new Item("Aged Brie", 0, 5),
            new Item("Aged Brie", -1, 9)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(7);
        expect(items[1].quality).toBe(11);
    });

    it("should not increase the quality value above 50 on updateQuality when the item is Aged Brie", function () {
        const gildedRose = new Shop([
            new Item("Aged Brie", 0, 50),
            new Item("Aged Brie", -1, 50),
            new Item("Aged Brie", 10, 50)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
        expect(items[1].quality).toBe(50);
        expect(items[2].quality).toBe(50);
    });

    it("should not change the quality value on updateQuality when the item is Sulfuras", function () {
        const gildedRose = new Shop([
            new Item("Sulfuras, Hand of Ragnaros", 0, 5),
            new Item("Sulfuras, Hand of Ragnaros", -1, 9),
            new Item("Sulfuras, Hand of Ragnaros", 1, 10)
        ]);
        const items = gildedRose.updateQuality();
        gildedRose.updateQuality();

        expect(items[0].quality).toBe(5);
        expect(items[1].quality).toBe(9);
        expect(items[2].quality).toBe(10);
    });

    it("should not change the sellIn value on updateQuality when the item is Sulfuras", function () {
        const gildedRose = new Shop([
            new Item("Sulfuras, Hand of Ragnaros", 0, 5),
            new Item("Sulfuras, Hand of Ragnaros", -1, 9),
            new Item("Sulfuras, Hand of Ragnaros", 1, 10)
        ]);
        const items = gildedRose.updateQuality();
        gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(0);
        expect(items[1].sellIn).toBe(-1);
        expect(items[2].sellIn).toBe(1);
    });

    it("should increase the quality value by 1 on updateQuality when the item is Backstage passes and sellIn is greater than 10 days", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(10);
        expect(items[0].quality).toBe(6);
    });

    it("should increase the quality value by 2 on updateQuality when the item is Backstage passes and sellIn is between 10 and 6 days", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5),
            new Item("Backstage passes to a TAFKAL80ETC concert", 6, 5)
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(7);
        expect(items[1].sellIn).toBe(5);
        expect(items[1].quality).toBe(7);
    });

    it("should increase the quality value by 3 on updateQuality when the item is Backstage passes and sellIn is between 5 and 1 days", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5),
            new Item("Backstage passes to a TAFKAL80ETC concert", 1, 5)
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(8);
        expect(items[1].sellIn).toBe(0);
        expect(items[1].quality).toBe(8);
    });

    it("should drop the quality value to 0 on updateQuality when the item is Backstage passes and sellIn is 0 or negative", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5),
            new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5)
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
        expect(items[1].sellIn).toBe(-2);
        expect(items[1].quality).toBe(0);
    });

    it("should decrease the quality value by 2 on updateQuality when the item is Conjured and sellIn is greater than 0", function () {
        const gildedRose = new Shop([new Item("Conjured", 2, 5)]);

        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(1);
        expect(items[0].quality).toBe(3);
    });

    it("should decrease the quality value by 4 on updateQuality when the item is Conjured and sellIn is 0 or negative", function () {
        const gildedRose = new Shop([
            new Item("Conjured", 0, 5),
            new Item("Conjured", -1, 9)
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(1);
        expect(items[1].quality).toBe(5);
    });

    it("should not decrease the quality value below 0 on updateQuality when the item is Conjured", function () {
        const gildedRose = new Shop([
            new Item("Conjured", 0, 0),
            new Item("Conjured", -1, 0),
            new Item("Conjured", 1, 0)
        ]);

        const items = gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
        expect(items[1].quality).toBe(0);
        expect(items[2].quality).toBe(0);
    });
});
