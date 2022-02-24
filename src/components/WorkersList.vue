<template>
  <v-virtual-scroll
    :items="workersList"
    class="elevation-3"
    height="660"
    item-height="64"
  >
    <template v-slot:default="{ item }">
      <v-list-item
        :key="item.id"
        @click="onWorkerClick(item.id)"
        :class="item.id == selectedWorker ? 'is-selected' : ''"
      >
        <v-list-item-content class="v-list-item">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script lang="ts">
import { LoadState } from "@/store/types";
import { WorkerType } from "@/store/workers/types";
import { WorkersActions } from "@/store/workers/actions";
import { Component, Vue } from "vue-property-decorator";
import { WorkersMutations } from "@/store/workers/mutations";
@Component({
  components: {},
})
export default class WorkersList extends Vue {
  get workersList(): WorkerType[] {
    return this.$store.getters["workers/getWorkers"];
  }
  get selectedWorker(): number {
    return this.$store.getters["workers/getSelectedWorker"];
  }
  onWorkerClick(id: number) {
    console.log(id, this.selectedWorker);
    this.$store.commit(`workers/${WorkersMutations.SET_SELECTED_WORKER}`, id);
  }
  mounted() {
    this.$store.commit("setStatus", LoadState.LOADING);
    this.$store.dispatch(`workers/${WorkersActions.GET_WORKERS_DATA}`);
    this.$store.commit("setStatus", LoadState.INIT);
  }
}
</script>
s
<style>
.is-selected {
  background-color: #ff9800 !important ;
}
.is-selected > .v-list-item__content > .v-list-item__title {
  color: #fff;
}
</style>
