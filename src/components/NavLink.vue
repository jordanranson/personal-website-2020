<template>
  <span class="nav-link">
    <router-link class="nav-link__title" :to="to">
      <slot />
    </router-link>
    <span class="nav-link__description">
      <slot name="description" />
    </span>
  </span>
</template>

<script>
export default {
  props: {
    to: {
      type: [ String, Object ],
      default: '/'
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-link
  display: flex
  margin-bottom: 1rem

a.nav-link__title
  color: #fff
  font-weight: var(--bold-weight)
  letter-spacing: normal
  text-transform: none

.nav-link__description
  margin-left: auto
  color: rgba(#fff, 0.5)
</style>
