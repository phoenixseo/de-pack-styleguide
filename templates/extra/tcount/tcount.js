function articleContentCounter() {
  wordCount = 0;
  charCount = 0;

  return {
    element: document.getElementsByTagName('article')[0].innerText,
    countWords() {
      this.wordCount = this.element.trim().split(" ").length;
    },
    countChars() {
      this.charCount = this.element.split(" ").join("").split("").length;
    },
  };
}
