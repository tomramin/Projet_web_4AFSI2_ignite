<template>
  <v-app>
    <v-app-bar dark style="background-color:#009300" app>
      <v-toolbar-title  class="headline text-uppercase">
        <span>projet web 4afsi2 ignite</span></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
  main {
    background-image: url('http://www.cartoonswallpapers.net/wallpapers/dragon-ball-z-wallpaper-iphone-6.jpg');
    background-size: cover
  }
</style>
