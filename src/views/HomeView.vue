<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="4">
        <WorkersList />
      </v-col>
      <v-col cols="8">
        <FlightsList />
        <v-card class="mb-4 mt-4" height="50"
          ><p class="text-center pt-3">Detail of the Flight</p></v-card
        >
        <FlightsDetailsWidget />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WorkersList from "@/components/WorkersList.vue"; // @ is an alias to /src
import FlightsList from "@/components/FlightsList.vue";
import FlightsDetailsWidget from "@/components/FlightsDetailsWidget.vue";
@Component({
  components: {
    WorkersList,
    FlightsList,
    FlightsDetailsWidget,
  },
})
export default class HomeView extends Vue {}
</script>
