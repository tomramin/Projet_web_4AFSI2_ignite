<template>
  <v-app>
    <v-app-bar dark style="background-color:#930000" app>
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
