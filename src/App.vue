<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="page in pages" :to="page.path" :key="page.path">{{ page.name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Project from '../.elek.io/project.json'
export default {
  computed: {
    pages: () => {
      return Project.pages;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
