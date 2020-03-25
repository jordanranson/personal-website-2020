<template>
  <scrolling-page class="about-view">
    <!-- About -->
    <section class="about-view__section">
      <aside class="about-view__content">
        <img src="https://placekitten.com/g/800/800" />
      </aside>
      <div class="about-view__content about-view__about">
        <header class="about-view__title">
          Hello.<span class="about-view__break" />
          My name is Jordan and I <strong>design</strong> and
          <strong>program</strong> websites, apps, and video games.
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula <a>convallis</a> massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
      </div>
    </section>

    <!-- Skills & Services -->
    <section class="about-view__section is-column">
      <h2 class="about-view__title">Skills &amp; Services</h2>
      <div class="about-view__services">
        <dark-box class="dark-box about-view__service-box">
          <h3>User Experience Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
        </dark-box>
        <dark-box class="dark-box about-view__service-box">
          <h3>Web Design &amp; Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
          <a>See Examples</a>
        </dark-box>
        <dark-box class="dark-box about-view__service-box">
          <h3>Graphics Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
          <a>See Examples</a>
        </dark-box>
        <dark-box class="dark-box about-view__service-box">
          <h3>Branding &amp; Logo Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
          <a>See Examples</a>
        </dark-box>
        <dark-box class="dark-box about-view__service-box">
          <h3>Animation &amp; Visual Effects</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
          <a>See Examples</a>
        </dark-box>
        <dark-box class="dark-box about-view__service-box">
          <h3>Game Design &amp; Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida velit a purus ullamcorper bibendum.
          </p>
          <a>See Examples</a>
        </dark-box>
      </div>
    </section>

    <!-- Contact form -->
    <section class="about-view__section">
      <aside class="about-view__content">
        <h2 class="about-view__title is-collapsed">Get In Touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <div class="about-view__availability">
          <h4 class="about-view__title-2">I'm currently <strong>available</strong> for work</h4>
          <p class="is-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque vehicula convallis massa eget tempor.
            Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
          </p>
        </div>
      </aside>
      <div class="about-view__content">
        <div class="about-view__title is-collapsed" v-html="'&nbsp'" aria-hidden />
        <form class="about-view__contact-form" @submit="contactFormSubmitted">
          <div class="about-view__field-group is-wide">
            <label>
              Your Email
              <input v-model="form.email" type="email" placeholder="jane@email.com" required />
            </label>
          </div>
          <div class="about-view__field-group is-wide">
            <label>
              Your Name
              <input v-model="form.name" type="text" placeholder="Jane Smith" required />
            </label>
          </div>
          <div class="about-view__field-group">
            <label>
              How can I help you?
              <textarea
                ref="messageBox"
                v-model="form.message"
                placeholder="Write your message..."
                required
              />
            </label>
          </div>
          <div class="about-view__field-group">
            <button>Send your message</button>
          </div>
        </form>
      </div>
    </section>
  </scrolling-page>
</template>

<script>
import DarkBox from '@/components/DarkBox.vue'
import ScrollingPage from '@/components/ScrollingPage.vue'

export default {
  name: 'AboutView',

  components: {
    DarkBox,
    ScrollingPage
  },

  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      messageHeight: 1
    }
  },

  mounted () {
    this.resizeMessageBox()
  },

  methods: {
    contactFormSubmitted (e) {
      e.preventDefault()
      console.log('submit')
    },

    resizeMessageBox () {
      const el = this.$refs.messageBox

      if (el) {
        el.style.height = '0px'
        el.style.height = el.scrollHeight + 'px'
        el.style.fontSize =
          el.value.length > 288 ?
            '100%' :
          el.value.length > 144 ?
            '150%' :
            '200%'
      }

      requestAnimationFrame(this.resizeMessageBox.bind(this))
    }
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap')

.about-view__section
  width: 100%
  position: relative
  display: flex
  padding: var(--page-margin) 0
  box-sizing: border-box
  &.is-column
    flex-direction: column
    padding: var(--page-margin)
    .about-view__title
      text-align: center
  &:not(:last-child)
    &::after
      content: ''
      position: absolute
      left: 45%
      right: 45%
      bottom: 0
      height: 1px
      background: var(--dark-gray)
      opacity: 0.1

.about-view__title
  font-size: 200%
  font-weight: var(--bold-weight)
  line-height: 1.25
  margin-bottom: 3rem
  font-family: 'DM Serif Display'
  &.is-collapsed
    margin-bottom: 1.5rem

.about-view__title-2
  font-size: 110%
  font-weight: var(--bold-weight)
  line-height: 1.25
  margin-bottom: 0.75rem

.about-view__break
  display: block
  margin-bottom: 1rem

.about-view__content
  flex-grow: 1
  width: 50%
  max-width: 50%
  padding: 0 calc(var(--page-margin)/2)
  &:first-child
    padding-left: calc(var(--page-margin)*3)
  &:last-child
    padding-right: calc(var(--page-margin)*3)
  img
    width: 100%
  p
    font-size: 16px
    line-height: 1.5
    margin-bottom: 1rem
    &.is-small
      font-size: 1rem
    a
      text-transform: uppercase
      letter-spacing: 1px
  strong
    display: inline-flex
    position: relative
    &::before
      content: ''
      position: absolute
      bottom: 0
      left: 0
      right: 0
      z-index: -1
      border-bottom: solid 0.5em var(--pink)
      opacity: 0.4

.about-view__about
  padding-top: 6rem

.about-view__services
  display: flex
  flex-wrap: wrap
  padding-bottom: 10rem
  .dark-box
    flex: 1 1 calc(33.33% - 3.34px)
    max-width: calc(33.33% - 3.34px)
    margin-bottom: 5px
    &:nth-child(3n)
      transform: translateY(10rem)
    &:nth-child(3n-1)
      transform: translateY(5rem)
    &:not(:nth-child(3n))
      margin-right: 5px

.about-view__service-box
  line-height: 1.5
  h3
    color: #fff
    font-weight: var(--bold-weight)
  p
    margin: 1rem 0
    // color: #fff
  a
    color: #fff
    font-weight: var(--bold-weight)
    letter-spacing: 1px
    text-transform: uppercase

.about-view__availability
  padding: 1.5rem
  margin-top: 2rem
  border: solid 1px var(--dark-gray-transparenter)
  p
    margin: 0

.about-view__field-group
  margin-bottom: 3rem
  &.is-wide
    margin-right: calc(var(--page-margin)*-2)
  label
    font-weight: var(--bold-weight)
    letter-spacing: 1px
    text-transform: uppercase
  input,
  textarea
    display: block
    margin-top: 0.5rem
    font-size: 200%
    background: transparent
    appearance: none
    border: none
    width: 100%
    resize: none
    outline: none
    line-height: 1.25
    height: 1.25em
    min-height: 1.25em
    transition: font-size 200ms ease, box-shadow 200ms ease
    &::placeholder
      color: rgba(#434243, 0.25)
    &:focus
      box-shadow: 0 2px 0 var(--pink)
  textarea
    line-height: 1.5
    height: 1.5em
    min-height: 1.5em
  button
    background: var(--pink)
    color: var(--dark-gray)
    font-size: 1rem
    text-transform: uppercase
    font-weight: var(--bold-weight)
    letter-spacing: 1px
    padding: 1rem
    border: none
    cursor: pointer
</style>
