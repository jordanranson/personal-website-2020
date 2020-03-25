<template>
  <full-page class="home-view">
    <div class="home-view__gallery">
      <header class="home-view__masthead">
        <h1>Jordan Ranson</h1>
        <p>Digital Product Designer</p>
      </header>
      <gallery-image class="gallery-image gallery-image__focus" />
      <gallery-image :class="`gallery-image gallery-image__secondary gallery-image__pos__${positions[0]}`" />
      <gallery-image :class="`gallery-image gallery-image__secondary gallery-image__pos__${positions[1]}`" />
      <gallery-image :class="`gallery-image gallery-image__secondary gallery-image__pos__${positions[2]}`" />
      <gallery-image :class="`gallery-image gallery-image__thumbnail gallery-image__pos__${positions[3]}`" />
    </div>
  </full-page>
</template>

<script>
import FullPage from '@/components/FullPage.vue'
import GalleryImage from '@/components/GalleryImage.vue'

export default {
  name: 'HomeView',

  components: {
    FullPage,
    GalleryImage
  },

  data () {
    const positions = [0, 1, 2, 3]

    const nextPosition = () => {
      const index = Math.round(Math.random()*positions.length-1);
      return positions.splice(index, 1);
    }

    return {
      positions: {
        0: nextPosition(),
        1: nextPosition(),
        2: nextPosition(),
        3: Math.round(Math.random()*2)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap')

$page-margin: 6vw

.home-view__masthead
  position: absolute
  top: 50%
  right: 50%
  margin-top: 1vw
  margin-right: 8.75vw + 1vw
  text-align: right
  font-size: 1vw
  h1
    font-size: 460%
    font-family: 'DM Serif Display', serif
  p
    font-size: 140%
    text-transform: uppercase
    letter-spacing: 0.1vw
    margin-top: 0.8vw
    font-weight: lighter

.home-view__gallery
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  pointer-events: none

.gallery-image
  pointer-events: auto
  position: absolute

.gallery-image__focus
  $size: 35vw
  width: $size
  height: $size
  top: 50%
  right: $page-margin
  margin-top: -($size/2)

.gallery-image__secondary
  $size: 35vw
  width: $size
  height: $size
  top: 50%
  right: $page-margin
  &.gallery-image__pos__0
    margin-top: calc(-#{($size)+($size/2)} - 5px)
    margin-right: calc(-26.25vw)
  &.gallery-image__pos__1
    margin-top: calc(-#{($size)+($size/2)} - 5px)
    margin-right: calc(8.75vw + 5px)
  &.gallery-image__pos__2
    margin-top: calc(#{($size/2)} + 5px)
    margin-right: calc(-26.25vw)
  &.gallery-image__pos__3
    margin-top: calc(#{($size/2)} + 5px)
    margin-right: calc(8.75vw + 5px)

.gallery-image__thumbnail
  $size: 17.5vw
  width: $size
  height: $size
  top: 50%
  &.gallery-image__pos__0
    right: calc(#{$size * 2 + $page-margin} + 5px)
    margin-top: -$size
  &.gallery-image__pos__1
    right: calc(-#{$size} + #{$page-margin} - 5px)
    margin-top: -$size
  &.gallery-image__pos__2
    right: calc(-#{$size} + #{$page-margin} - 5px)
</style>
