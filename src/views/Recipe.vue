<template>
  <scrolling-page class="recipe-view">
    <!-- Contact form -->
    <section class="recipe-view__section">
      <aside class="recipe-view__content">
        <h1 class="recipe-view__title">Recipe Name</h1>
        <p class="recipe-view__subtitle">
          <span>1 hour prep</span>
          <span>1 hour cook</span>
          <span>4 servings</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <h2 class="recipe-view__title-2">Directions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <h2 class="recipe-view__title-2">Directions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vehicula convallis massa eget tempor.
          Suspendisse neque metus, tristique eu varius vitae, dapibus id nisi.
        </p>
        <p class="recipe-view__tags">
          these are some tags
        </p>
      </aside>
      <div class="recipe-view__content">
        <div class="recipe-view__title" v-html="'&nbsp'" aria-hidden />
        <div class="recipe-view__ingredients">
          <h4 class="recipe-view__title-3">Ingredients</h4>
          <ul>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
          </ul>
          <h4 class="recipe-view__title-3">Ingredients</h4>
          <ul>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
            <li>Item<small>300mg</small></li>
          </ul>
        </div>
      </div>
    </section>
  </scrolling-page>
</template>

<script>
import ScrollingPage from '@/components/ScrollingPage.vue'

export default {
  name: 'RecipeView',

  components: {
    ScrollingPage
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap')

.recipe-view__section
  width: 100%
  position: relative
  display: flex
  padding: var(--page-margin) 0
  box-sizing: border-box
  &.is-column
    flex-direction: column
    padding: var(--page-margin)
    .recipe-view__title
      text-align: center
  &:not(:last-child)
    &::after
      content: ''
      position: absolute
      left: 45%
      right: 45%
      bottom: 0
      height: 1px
      background: var(--dark-gray)
      opacity: 0.1

.recipe-view__subtitle
  opacity: 0.6
  margin-top: 0.25rem !important
  margin-bottom: 1.5rem !important
  span
    display: inline-block
    &:not(:last-child):after
      content: '·'
      display: inline-block
      margin: 0 0.5rem

.recipe-view__tags
  opacity: 0.6
  margin-top: 1.5rem !important
  word-spacing: 0.5rem

.recipe-view__title
  font-size: 200%
  font-weight: var(--bold-weight)
  line-height: 1.25
  font-family: 'DM Serif Display'

.recipe-view__title-2
  font-size: 110%
  font-weight: var(--bold-weight)
  line-height: 1.25
  margin: 2rem 0 1rem 0

.recipe-view__title-3
  font-weight: var(--bold-weight)
  line-height: 1.25

.recipe-view__break
  display: block
  margin-bottom: 1rem

.recipe-view__content
  flex-grow: 1
  width: 50%
  max-width: 50%
  padding: 0 calc(var(--page-margin)/2)
  &:first-child
    padding-left: calc(var(--page-margin)*3)
  &:last-child
    padding-right: calc(var(--page-margin)*3)
  img
    width: 100%
  p
    font-size: 110%
    line-height: 1.5
    margin-bottom: 1rem
    &.is-small
      font-size: 1rem
    a
      text-transform: uppercase
      letter-spacing: 1px
  strong
    display: inline-flex
    position: relative
    &::before
      content: ''
      position: absolute
      bottom: 0
      left: 0
      right: 0
      z-index: -1
      border-bottom: solid 0.5em var(--pink)
      opacity: 0.4

.recipe-view__about
  padding-top: 6rem

.recipe-view__ingredients
  padding: 1.5rem
  border: solid 1px var(--dark-gray-transparenter)
  ul
    padding-inline-start: 2rem
    &:not(:last-child)
      margin-bottom: 2rem
    li
      position: relative
      margin: 1rem 0
      &:before
        left: -1.5rem
        content: '—'
        margin-right: 0.5rem
        position: absolute
      &:last-child
        margin: 0
      small
        opacity: 0.6
        display: inline-block
        margin-left: 0.5rem
</style>
