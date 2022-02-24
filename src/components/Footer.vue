<template>
  <div class="footer">
    <v-container>
      <p>Fotter</p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class FooterBar extends Vue {}
</script>

<style scoped>
.footer {
  background: #333;
  color: #fff;
  text-align: center;
}
</style>
