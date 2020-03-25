<template>
  <div id="app">

    <navigation>
      <template v-slot:main-links="{ showSection }">
        <router-link :to="{ name: 'projects' }" @mouseover.native="showSection('projects')">Projects</router-link>
        <router-link :to="{ name: 'services' }" @mouseover.native="showSection('services')">My Services</router-link>
        <router-link :to="{ name: 'about' }" @mouseover.native="showSection('about')">About Me</router-link>
      </template>
      <template v-slot:project-links-left>
        <!-- Personal projects -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Botswick<template v-slot:description>Web Application</template></nav-link>
        <!-- Client projects -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Telewalks<template v-slot:description>Marketing Site</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">PT<template v-slot:description>Marketing Site</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">EGS<template v-slot:description>Marketing Site</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Gabbi.ai<template v-slot:description>Web Application</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">SAM<template v-slot:description>Web Application</template></nav-link>
        <!-- Software libraries -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Animeta<template v-slot:description>Software Library</template></nav-link>
      </template>
      <template v-slot:project-links-right>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Anchors Away<template v-slot:description>Software Library</template></nav-link>
        <!-- Demos and experiments -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Foil Shader<template v-slot:description>WebGL Experiment</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Cube Shader<template v-slot:description>WebGL Experiment</template></nav-link>
        <!-- Video games -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Vengeful Manatees<template v-slot:description>Video Game</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">POMS<template v-slot:description>Video Game</template></nav-link>
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Comet Crash<template v-slot:description>Video Game</template></nav-link>
        <!-- Video game mods -->
        <nav-link :to="{ name: 'project', params: { projectSlug: 'example' }}">Lunkler's Data Packs<template v-slot:description>Minecraft Data Pack</template></nav-link>
      </template>
    </navigation>

    <router-view />

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import NavLink from '@/components/NavLink.vue'

export default {
  components: {
    Navigation,
    NavLink
  }
}
</script>

<style lang="sass">
@import "@/styles/reset.sass"

html
  --bold-weight: 500
  --dark-gray: #434243
  --dark-gray-transparent: #{rgba(#434243, 0.9)}
  --dark-gray-transparenter: #{rgba(#434243, 0.6)}
  --pink: #FF959F
  --page-margin: 6vw
  font-size: 14px

body
  width: 100%
  min-height: 100vh
  color: var(--dark-gray)
  background-color: #E6E5E7
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

a
  text-decoration: none
  font-weight: var(--bold-weight)
  color: inherit
  cursor: pointer

input,
textarea,
select,
button
  font-family: Avenir, Helvetica, Arial, sans-serif
</style>
