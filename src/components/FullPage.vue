<template>
  <div class="page full-page">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.full-page
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
</style>
