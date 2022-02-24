<template>
  <v-app-bar color="orange" dark height="50" app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {}
</script>
