# Gilded Rose Refactoring Kata

- [x] Completed code for JS-Jest

----------------------------------------------------------------------------------

You can find out more about this exercise in my YouTube video [Why Developers LOVE The Gilded Rose Kata](https://youtu.be/Mt4XpGxigT4).

I use this kata as part of my work as a technical coach. I wrote a lot about the coaching method I use in this book [Technical Agile Coaching with the Samman method](https://leanpub.com/techagilecoach). A while back I wrote this article ["Writing Good Tests for the Gilded Rose Kata"](http://coding-is-like-cooking.info/2013/03/writing-good-tests-for-the-gilded-rose-kata/) about how you could use this kata in a [coding dojo](https://leanpub.com/codingdojohandbook).


## How to use this Kata

The simplest way is to just clone the code and start hacking away improving the design. You'll want to look at the ["Gilded Rose Requirements"](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/GildedRoseRequirements.txt) which explains what the code is for. I strongly advise you that you'll also need some tests if you want to make sure you don't break the code while you refactor.

You could write some unit tests yourself, using the requirements to identify suitable test cases. I've provided a failing unit test in a popular test framework as a starting point for most languages.

Alternatively, use the Approval tests provided in this repository. (Read more about that in the section "Text-based Approval Testing").

The idea of the exercise is to do some deliberate practice, and improve your skills at designing test cases and refactoring. The idea is not to re-write the code from scratch, but rather to practice taking small steps, running the tests often, and incrementally improving the design. 

Please don't send me a pull request with your solution. It can be a bit confusing since GitHub encourages you to do so! Please only send me pull requests if you have a correction or improvement to the starting position. You don't want to spoil the fun of doing the exercise for other people!


### Gilded Rose Requirements in other languages 

- [English](GildedRoseRequirements.txt)
- [Español](GildedRoseRequirements_es.md)
- [Français](GildedRoseRequirements_fr.md)
- [Italiano](GildedRoseRequirements_it.md)
- [日本語](GildedRoseRequirements_jp.md)
- [Português](GildedRoseRequirements_pt-BR.md)
- [Русский](GildedRoseRequirements_ru.txt)
- [ไทย](GildedRoseRequirements_th.md)
- [中文](GildedRoseRequirements_zh.txt)
- [한국어](GildedRoseRequirements_kr.md)
- [German](GildedRoseRequirements_de.md)

## Text-Based Approval Testing

Most language versions of this code have a [TextTest](https://texttest.org) fixture for Approval testing. For information about this, see the [TextTests README](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/texttests)

## History of the exercise

This Kata was originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](https://iamnotmyself.com/refactor-this-the-gilded-rose-kata/).

I translated the original C# into a few other languages, (with a little help from my friends!), and slightly changed the starting position. This means I've actually done a small amount of refactoring already compared with the original form of the kata, and made it easier to get going with writing tests by giving you one failing unit test to start with. I also added test fixtures for Text-Based approval testing with TextTest (see [the TextTests](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/texttests))

As Bobby Johnson points out in his article ["Why Most Solutions to Gilded Rose Miss The Bigger Picture"](https://iamnotmyself.com/why-most-solutions-to-gilded-rose-miss-the-bigger-picture/), it'll actually give you
better practice at handling a legacy code situation if you do this Kata in the original C#. However, I think this kata
is also really useful for practicing writing good tests using different frameworks and approaches, and the small changes I've made help with that. I think it's also interesting to compare what the refactored code and tests look like in different programming languages.

## Translating this code

More translations are most welcome! I'm very open for pull requests that translate the starting position into additional languages. 

Please note a translation should ideally include:

- a translation of the production code for 'update_quality' and Item
- one failing unit test complaining that "fixme" != "foo"
- a TextTest fixture, ie a command-line program that runs update_quality on the sample data for the number of days specified.

Please don't write too much code in the starting position or add too many unit tests. The idea with the one failing unit test is to tempt people to work out how to fix it, discover it wasn't that hard, and now they understand what this test is doing they realize they can improve it.  

If your programming language doesn't have an easy way to add a command-line interface, then the TextTest fixture is probably not necessary.

