const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const word = new Word()
      expect(word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      const word = new Word("alok");
      expect(word.word).to.equal("alok");
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const word = new Word("Alphanumeric");
      const newWord = word.removeVowels();
      expect(newWord).to.equal("lphnmrc");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word = new Word("Alphanumeric");
      const newWord = word.removeConsonants();
      expect(newWord).to.equal("Aauei");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newword = new Word("Alpha");
      const anotherword = new Word("banana");

      let w1 = newword.pigLatin();
      let w2 = anotherword.pigLatin();

      expect(w1).to.equal("Alphayay");
      expect(w2).to.equal("ananabay")

    });
  });
});
