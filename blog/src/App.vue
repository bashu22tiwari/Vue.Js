<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!-- <Home data="Bashu is not Here"/> -->
    <!-- <Home data="Bashu is Here"/> -->
    <!-- <Parent/> -->
    <!-- <Class/> -->
    <!-- <DataBind/> -->
    <Form />
    <!-- <Home /> -->
    <!-- <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/setting">Setting</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Parent from './components/Parent.vue'
// import Class from './components/Class.vue'
// import DataBind from './components/DataBind.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home
  // Parent
  // DataBind
  Form

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
  margin-top: 60px;
}

body{
  margin: 0;
  background: #eee;
}
</style>
