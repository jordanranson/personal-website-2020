<template>
  <div class="project-slide">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProjectSlide'
}
</script>

<style lang="sass" scoped>
.project-slide
  background: #ccc
  width: 100%
  height: 100%
</style>
