<template>
<div class="items-center h-screen bg-azul">
  <div class="p-1">
      <div class="w-auto h-auto rounded-lg shadow-md bg-laranja">
  <nav>
    <router-link class="text-lg text-center text-semibold" to="/">Início</router-link> |
    <router-link class="text-lg text-center text-semibold" to="/about">Detalhes</router-link> |
    <router-link class="text-lg text-center text-semibold" to="/conteudo">Lista</router-link>
  </nav>
  <router-view/>
  </div></div></div>
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
