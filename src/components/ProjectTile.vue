<template>
  <div class="project-tile">
    <router-link :to="to">
      <img :src="src" />
      <h2><slot name="title" /></h2>
      <p><slot name="description" /></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GalleryImage',

  props: {
    to: {
      type: [ String, Object ],
      default: '/projects/example'
    },
    src: {
      type: String,
      default: 'https://placekitten.com/g/800/800'
    }
  }
}
</script>

<style lang="sass" scoped>
.project-tile
  text-align: center
  a
    text-decoration: none
  img
    width: 100%
    height: auto
    margin-bottom: 1rem
  h2
    font-size: 1rem
    font-weight: var(--bold-weight)
    letter-spacing: 1px
    margin-bottom: 0.25rem
    text-transform: uppercase
</style>
