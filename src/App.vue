<script setup>
import { computed } from 'vue'
import { useFilters } from './composables/useFilters'
import HelloWorld from './components/HelloWorld.vue'

const filters = useFilters()
const myLongString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem consequuntur excepturi. Accusantium suscipit fugit, cupiditate expedita sit asperiores enim dolore? Amet tenetur culpa, aspernatur ut est ipsam deleniti alias.'
const myExcerpt = computed(() => filters.limitTo(myLongString, 50))
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <div>Excerpt using global filters:</div>
    <pre>{{ myExcerpt }}</pre>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
