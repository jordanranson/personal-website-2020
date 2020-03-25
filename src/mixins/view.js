import anime from 'animejs'

export default {
  methods: {
    wait (delay) {
      return new Promise((resolve) => {
        if (delay) setTimeout(resolve, delay)
        else this.$nextTick(resolve)
      })
    },

    stagger (delay, props) {
      return anime.stagger(delay, props)
    },

    animate (props) {
      if (typeof props.targets === 'string') props.targets = this.$el.querySelectorAll(props.targets)
      return anime(props).finished
    },

    animateAll (props) {
      let delay = 0

      const promises = props.map((prop) => {
        if (typeof prop.delay === 'string') {
          delay += Number(prop.delay.replace('+',''))
          prop.delay = delay
        }
        return this.animate(prop)
      })
      return Promise.all(promises)
    }
  }
}
