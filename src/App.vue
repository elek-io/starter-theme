<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="link in navigation" :key="link.to" :to="link.to">{{ link.name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Project from '../.elek.io/project.json'

export default {
  name: 'App',
  computed: {
    navigation: () => {
      return Project.pages.map((page) => {
        return {
          to: page.uriPath,
          name: page.name
        };
      });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
