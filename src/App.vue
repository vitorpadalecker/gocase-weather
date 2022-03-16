<template>
<div class="items-center h-screen bg-light">
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/about">Detalhes</router-link> |
    <router-link to="/conteudo">Lista</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style>

#app {
  font-family: verdana;
  color: #2c3e50;
}
#home {
  font-family: verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: dark;
}

nav {
  padding: 30px;
  text-align: center;
  align-content: center;
}

nav a {
  font-weight: bold;
  color: darkest;
  
}

nav a.router-link-exact-active {
  color: escuro;
}
</style>
