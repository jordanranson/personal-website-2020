<template>
  <full-page class="project-view">
    <div class="project-view__gallery">
      <div class="project-view__gallery__slides">
        <project-slide class="project-slide" v-if="false">
          Slide
        </project-slide>
      </div>
      <div class="project-view__gallery__controls">
        <a class="project-view__gallery__control is-prev"><i /><span>Prev</span></a>
        <span class="project-view__gallery__slide-counter">0 / 0</span>
        <a class="project-view__gallery__control is-next"><span>Next</span><i /></a>
      </div>
    </div>
    <dark-box class="project-view__description">
      <h1>Project Name</h1>
      <p class="project-view__subtitle">Description</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur gravida velit a purus ullamcorper bibendum.
        Sed laoreet nisi id leo eleifend, eu bibendum elit vehicula.
        Duis maximus tellus urna, sit amet pharetra arcu dapibus vel.
      </p>
      <p>
        <span><em>Collaboration with</em> <a>PT</a></span>
        <span class="project-view__link"><a>Visit Website</a></span>
      </p>
      <p class="project-view__subtitle">
        vuejs javascript nodejs sass keyword
      </p>
    </dark-box>
  </full-page>
</template>

<script>
import viewMixin from '@/mixins/view.js'
import DarkBox from '@/components/DarkBox.vue'
import FullPage from '@/components/FullPage.vue'
import ProjectSlide from '@/components/ProjectSlide.vue'

export default {
  name: 'ProjectView',

  mixins: [
    viewMixin
  ],

  components: {
    DarkBox,
    FullPage,
    ProjectSlide
  },

  async mounted () {
    await this.wait()

    const constants = this.$constants.animation.block

    this.animateAll([
      {
        targets: '.project-view__description',
        translateY: [
          {value: '10vw', easing: 'linear', duration: 0},
          {value: '1vw', easing: constants.easeIn}
        ],
        opacity: [
          {value: 0, easing: 'linear', duration: 0},
          {value: 1, easing: 'linear', duration: constants.opacityDuration},
        ]
      },
      {
        delay: '+100',
        targets: '.project-view__gallery__control.is-prev',
        translateX: [
          {value: '-2rem', easing: 'linear', duration: 0},
          {value: '0', easing: constants.easeIn}
        ],
        opacity: [
          {value: 0, easing: 'linear', duration: 0},
          {value: 1, easing: 'linear', duration: constants.opacityDuration},
        ]
      },
      {
        delay: '+100',
        targets: '.project-view__gallery__slide-counter',
        translateY: [
          {value: '2rem', easing: 'linear', duration: 0},
          {value: '0', easing: constants.easeIn}
        ],
        opacity: [
          {value: 0, easing: 'linear', duration: 0},
          {value: 1, easing: 'linear', duration: constants.opacityDuration},
        ]
      },
      {
        delay: '+100',
        targets: '.project-view__gallery__control.is-next',
        translateX: [
          {value: '2rem', easing: 'linear', duration: 0},
          {value: '0', easing: constants.easeIn}
        ],
        opacity: [
          {value: 0, easing: 'linear', duration: 0},
          {value: 1, easing: 'linear', duration: constants.opacityDuration},
        ]
      }
    ])
  },

  async beforeRouteLeave (to, from, next) {
    const constants = this.$constants.animation.block

    await this.animate({
      targets: '.project-view__description',
      translateY: [
        {value: '1vw', easing: 'linear', duration: 0},
        {value: '10vw', easing: constants.easeOut, duration: constants.translateDuration}
      ],
      opacity: [
        {value: 1, easing: 'linear', duration: 0},
        {value: 0, easing: 'linear', duration: constants.opacityDuration},
      ]
    })

    next()
  }
}
</script>

<style lang="sass" scoped>
.project-view__gallery
  position: absolute
  top: var(--page-margin)
  bottom: var(--page-margin)
  left: calc(var(--page-margin)*2)
  right: calc(var(--page-margin)*2)
  box-sizing: border-box
  display: flex
  flex-wrap: wrap

.project-view__gallery__slides
  position: relative
  width: 100%
  height: 100%

.project-slide
  position: absolute
  top: 0
  left: 0

.project-view__gallery__controls
  position: absolute
  bottom: -3rem
  left: 0
  text-transform: uppercase
  font-size: 1rem
  letter-spacing: 1px
  display: flex
  font-weight: 500

.project-view__gallery__control
  display: flex
  align-items: center
  i
    display: inline-flex
    width: 3rem
    height: 1px
    background: var(--dark-gray)
    opacity: 0.6
    &:first-child
      margin-right: 1rem
    &:last-child
      margin-left: 1rem

.project-view__gallery__slide-counter
  margin: 0 5rem
  word-spacing: 3px

.project-view__description
  position: absolute
  bottom: 0
  right: 0
  width: 33vw
  line-height: 1.5
  color: #fff
  h1
    font-weight: var(--bold-weight)
  p
    margin-bottom: 1rem
  em
    font-style: italic
  a
    color: #fff
    font-weight: var(--bold-weight)
    letter-spacing: 1px
    text-transform: uppercase

.project-view__subtitle
  color: rgba(#fff, 0.5)

.project-view__link
  float: right
</style>
