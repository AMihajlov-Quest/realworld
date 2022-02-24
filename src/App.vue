<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-container v-if="loadingStatus === 1">
      <template>
        <p class="loader">Loading ...</p>
      </template>
    </v-container>
    <v-main>
      <router-view />
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    NavBar,
    FooterBar,
  },
})
export default class App extends Vue {
  get loadingStatus() {
    return this.$store.getters["getLoadState"];
  }
}
</script>

<style>
.loader {
  color: #ff9800;
  padding: 30px;
}
</style>
