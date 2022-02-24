<template>
  <v-data-table
    :headers="headers"
    :items="flightsList"
    :items-per-page="5"
    class="elevation-3"
    @click:row="onSelectFlights"
  >
  </v-data-table>
</template>

<script lang="ts">
import { LoadState } from "@/store/types";
import { FlightsActions } from "@/store/flights/actions";
import { Component, Vue, Watch } from "vue-property-decorator";
import { FlightType } from "@/store/flights/types";
import { FlightsMutations } from "@/store/flights/mutations";
@Component({
  components: {},
})
export default class FlightsList extends Vue {
  headers = [
    {
      text: "Flight Number",
      align: "start",
      sortable: false,
      value: "num",
    },
    { text: "Origin", value: "from" },
    { text: "Origin Date", value: "from_date" },
    { text: "Destination", value: "to" },
    { text: "Destination Date", value: "to_date" },
  ];
  get flightsList(): FlightType[] {
    return this.$store.getters["flights/getFlights"];
  }
  get selectedWorker(): number {
    return this.$store.getters["workers/getSelectedWorker"];
  }
  onSelectFlights(data: FlightType) {
    this.$store.commit(
      `flights/${FlightsMutations.SET_SELECTED_FLIGHTS}`,
      data
    );
  }
  @Watch("selectedWorker")
  onPropertyChanged(value: number) {
    this.$store.commit("setStatus", LoadState.LOADING);
    this.$store.dispatch(`flights/${FlightsActions.GET_FLIGHTS_DATA}`, value);
    this.$store.commit("setStatus", LoadState.INIT);
  }
}
</script>

<style></style>
