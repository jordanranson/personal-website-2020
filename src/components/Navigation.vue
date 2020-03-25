<template>
  <nav v-if="$route.name" :class="{ navigation: true, 'popover-open': popoverOpen, 'is-collapsed': isCollapsed }">
    <div class="navigation__links" @mouseover="popoverOpen = true">
      <slot name="main-links" :show-section="showSection" />
    </div>
    <div class="navigation__icon is-main" @click="popoverOpen = true">
      <img :src="require('@/assets/menu.svg')" />
    </div>
    <transition name="recipe-view">
      <div v-if="$route.meta.level <= 1" class="navigation__icon is-right" @click="goBack">
        <img :src="require('@/assets/back.svg')" />
      </div>
      <div v-else class="navigation__icon is-right" @click="goBack">
        <img :src="require('@/assets/close.svg')" />
      </div>
    </transition>
    <dark-box class="dark-box navigation__popover" @mouseleave.native="popoverOpen = false">
      <div class="navigation__popover__main-links">
        <div @click="popoverOpen = false">
          <slot name="main-links" :show-section="showSection" />
        </div>
        <div v-if="sectionVisible==='projects'" class="navigation__popover__filter">
          All Projects
        </div>
      </div>
      <div class="navigation__popover__links">
        <div v-if="sectionVisible==='projects'" class="navigation__popover__section">
          <div class="navigation__popover__section__left" @click="popoverOpen = false">
            <slot name="project-links-left" />
          </div>
          <div class="navigation__popover__section__right" @click="popoverOpen = false">
            <slot name="project-links-right" />
          </div>
        </div>
        <div v-if="sectionVisible==='about'" class="navigation__popover__section">
          <slot name="about-content" />
        </div>
      </div>
    </dark-box>
  </nav>
</template>

<script>
import DarkBox from '@/components/DarkBox.vue'

export default {
  components: {
    DarkBox
  },

  data () {
    return {
      popoverOpen: false,
      sectionVisible: 'projects'
    }
  },

  computed: {
    isCollapsed () {
      return this.$route.meta.level > 0
    }
  },

  methods: {
    showSection (whichSection) {
      this.sectionVisible = whichSection
    },

    goBack () {
      const { name } = this.$route

      if (name === 'project') {
        this.$router.push({ name: 'projects' })
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.navigation
  position: fixed
  top: var(--page-margin)
  left: var(--page-margin)
  right: var(--page-margin)
  z-index: 10
  white-space: nowrap
  a
    text-decoration: none

.navigation__links
  opacity: 1
  transform: translateX(0rem)
  transition: all 300ms ease
  display: inline-block
  a
    color: var(--dark-gray)

.navigation.is-collapsed
  .navigation__links
    opacity: 0
    transform: translateX(2rem)
    pointer-events: none

.navigation__icon
  position: absolute
  top: -0.25rem
  width: 1.34vw
  height: 1.34vw
  display: flex
  cursor: pointer
  transition: all 300ms ease
  pointer-events: none
  &.is-right
    right: 1.34vw * -2
    opacity: 0
    transform: translateX(2rem)
  &:not(.is-right)
    left: 1.34vw * -2
    opacity: 0
    transform: translateX(-2rem)
  img
    width: 100%
    margin: auto

.navigation.is-collapsed
  .navigation__icon
    pointer-events: auto
    &.is-right
      opacity: 1
      transform: translateX(0rem)
    &:not(.is-right)
      opacity: 1
      transform: translateX(0rem)

.navigation__links,
.navigation__popover__main-links
  /deep/ a
    letter-spacing: 1px
    text-transform: uppercase
    text-decoration: none
    margin-right: 2rem
    font-weight: var(--bold-weight)
    &:last-of-type
      margin-right: 0

.dark-box
  padding: var(--page-margin)

.navigation__popover
  opacity: 0
  pointer-events: none
  transition: all 400ms ease
  position: absolute
  top: calc(var(--page-margin) * -1)
  left: calc(var(--page-margin) * -1)
  min-width: 66vw

.navigation.popover-open
  .navigation__popover
    opacity: 1
    pointer-events: auto

.navigation__popover__main-links
  display: flex
  margin-bottom: 3rem

.navigation__popover__filter
  margin-left: auto

.navigation__popover__section
  display: flex
  position: relative
  .nav-link
    width: 100%

.navigation__popover__section__left,
.navigation__popover__section__right
  display: flex
  flex-direction: column
  width: 50%

.navigation__popover__section__left
  &:only-child
    width: 100%
  &:not(:only-child)
    margin-right: 5rem
</style>
