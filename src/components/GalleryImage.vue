<template>
  <div class="gallery-image">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: 'GalleryImage',

  props: {
    src: {
      type: String,
      default: 'https://placekitten.com/g/800/800'
    }
  }
}
</script>

<style lang="sass" scoped>
.gallery-image
  img
    width: 100%
    height: 100%
</style>
