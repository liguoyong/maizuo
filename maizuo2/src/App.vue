<template>
  <div id="app">

    <app-header></app-header>
    
    <router-view></router-view>

    <app-nav></app-nav>

  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import AppNav from '@/components/common/AppNav'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav
  }
}
</script>

<style>

</style>
