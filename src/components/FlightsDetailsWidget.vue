<template>
  <v-card elevation="2">
    <v-list-item>
      <v-list-item-content class="v-list-item">
        <v-list-item-title>Plain Number</v-list-item-title>
        <v-list-item-subtitle>{{
          selectedFlightDetail.num
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content class="v-list-item">
        <v-list-item-title>Duration</v-list-item-title>
        <v-list-item-subtitle
          >{{ Math.floor(selectedFlightDetail.duration / 60) }}h{{
            selectedFlightDetail.duration % 60
          }}min</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content class="v-list-item">
        <v-list-item-title>Origin gate</v-list-item-title>
        <v-list-item-subtitle>{{
          selectedFlightDetail.from_gate
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content class="v-list-item">
        <v-list-item-title>Destination gate</v-list-item-title>
        <v-list-item-subtitle>{{
          selectedFlightDetail.to_gate
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { FlightType } from "@/store/flights/types";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class FlightsDetailsWidget extends Vue {
  get selectedFlightDetail(): FlightType[] {
    return this.$store.getters["flights/getSelectedFlight"];
  }
}
</script>
