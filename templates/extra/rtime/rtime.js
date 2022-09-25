const readingTime = () => {
  return {
    init() {
      wpm = 265

      text = document.getElementsByTagName('article')[0].innerText

      words = text.trim().split(" ").length

      rtime = Math.ceil(words / wpm)
    }
  }
}
