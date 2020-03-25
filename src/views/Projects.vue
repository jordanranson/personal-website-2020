<template>
  <scrolling-page class="projects-view">
    <div class="projects-view__gallery">
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
      <project-tile class="project-tile">
        <template v-slot:title>Title</template>
        <template v-slot:description>Description</template>
      </project-tile>
    </div>
  </scrolling-page>
</template>

<script>
import viewMixin from '@/mixins/view.js'
import ProjectTile from '@/components/ProjectTile.vue'
import ScrollingPage from '@/components/ScrollingPage.vue'

export default {
  name: 'ProjectsView',

  mixins: [
    viewMixin
  ],

  components: {
    ProjectTile,
    ScrollingPage
  },

  async mounted () {
    await this.wait()

    const constants = this.$constants.animation.block
    const tiles = this.$el.querySelectorAll('.project-tile')
    const stagger = this.stagger(100, {
      grid: [3, Math.floor(tiles.length/3)],
      from: 'first'
    })

    this.animate({
      targets: tiles,
      translateY: [
        {value: '-10vw', easing: 'linear', duration: 0},
        {value: '0vw', easing: constants.easeIn}
      ],
      opacity: [
        {value: 0, easing: 'linear', duration: 0},
        {value: 1, easing: 'linear', duration: constants.opacityDuration},
      ],
      delay: stagger
    })
  },

  async beforeRouteLeave (to, from, next) {
    const constants = this.$constants.animation.block
    const tiles = this.$el.querySelectorAll('.project-tile')
    const stagger = this.stagger(100, {
      grid: [3, Math.floor(tiles.length/3)],
      from: 'first'
    })

    await this.animate({
      targets: tiles,
      translateY: [
        {value: '0vw', easing: 'linear', duration: 0},
        {value: '-10vw', easing: constants.easeOut, duration: constants.translateDuration}
      ],
      opacity: [
        {value: 1, easing: 'linear', duration: 0},
        {value: 0, easing: 'linear', duration: constants.opacityDuration},
      ],
      delay: stagger
    })

    next()
  }
}
</script>

<style lang="sass" scoped>
$page-margin: 6vw

.projects-view__gallery
  display: flex
  padding: $page-margin $page-margin*2
  position: relative
  flex-wrap: wrap

.project-tile
  flex: 1 1 calc(33.33% - 3.34px)
  max-width: calc(33.33% - 3.34px)
  margin-bottom: 5rem
  &:not(:nth-child(3n))
    margin-right: 5px
</style>
