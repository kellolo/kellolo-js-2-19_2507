<template>
<div>
  <header>
    <div id="app">
      <router-link to="/header">header</router-link>
      </div>
  </header>
  checkout
  <router-view />
   <router-link to="/footer">footer</router-link>
  <footer />
</div>
<!--div id="app">
    <div id="app">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/basket">Basket</router-link>
    </div>
    <router-view />
</div-->
</template>

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

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
