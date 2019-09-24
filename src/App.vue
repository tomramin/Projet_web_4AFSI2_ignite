<template>
  <v-app>
    <v-app-bar dark style="background-color:red" app>
      <v-toolbar-title  class="headline text-uppercase">
        <span>projet web 4afsi2 ignite</span></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Ignite/>
    </v-content>
  </v-app>
</template>

<script>
import Ignite from './components/Ignite'

export default {
  name: 'App',
  components: {
    Ignite
  },
  data: () => ({
    //
  })
}
</script>
