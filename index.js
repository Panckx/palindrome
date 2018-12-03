module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join('');
}

function Phrase(content) {

  this.content = content;

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {

  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}
TranslatedPhrase.prototype = new Phrase();
