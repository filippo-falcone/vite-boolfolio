<script>
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';

export default {
  components: {
    AppHeader,
    ProjectList
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './style/generic';
</style>