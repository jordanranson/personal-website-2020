<template>
  <div class="dark-box">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.dark-box
  padding: calc(var(--page-margin) / 2)
  color: rgba(#fff, 0.5)
  background: var(--dark-gray-transparent)
  backdrop-filter: blur(3px)
  box-sizing: border-box

  /deep/ a
    color: rgba(#fff, 0.5)
    text-decoration: none
    &:hover,
    &.is-selected
      color: #fff
</style>
