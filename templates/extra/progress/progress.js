const scrollProgressCircular = () => {
  return {
    init() {
      window.addEventListener('scroll', () => {

        let winScroll = document.body.scrollTop || document.documentElement.scrollTop

        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        this.percent = Math.round((winScroll / height) * 100)

      })
    },
    circumference: 30 * 2 * Math.PI,
    percent: 0,
  }
}

const scrollProgressBar = () => {
  return {
    init() {
      window.addEventListener('scroll', () => {

        let winScroll = document.body.scrollTop || document.documentElement.scrollTop

        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        this.percent = Math.round((winScroll / height) * 100)

      })
    },
    circumference: 30 * 2 * Math.PI,
    percent: 0,
  }
}
