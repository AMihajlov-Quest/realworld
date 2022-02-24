import Vue from "vue";
import WorkersList from "../WorkersList.vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
//units
import { createLocalVue, mount } from "@vue/test-utils";
import { WorkersActions } from "@/store/workers/actions";

describe("WorkersList.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let vuetify: Vuetify;

  const mutations = {
    setStatus: jest.fn(),
  };

  const store = new Vuex.Store({ mutations });
  store.dispatch = jest.fn();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const factory = (Comment: typeof Vue, options = {}) => {
    return mount(Comment, {
      localVue,
      vuetify,
      store,
      ...options,
    });
  };
  it("is rendered", () => {
    const wrapper = factory(WorkersList, {});
    expect(wrapper.exists()).toBe(true);
    wrapper.destroy();
  });

  it("commits a status mutation when component is mounted", async () => {
    const wrapper = factory(WorkersList, {});
    //await wrapper.find(".commit").emitted();
    expect(mutations.setStatus).toHaveBeenCalledWith({}, 1);
  });
  it("dispatches and action when component is mounted", async () => {
    const wrapper = factory(WorkersList, {});
    expect(store.dispatch).toHaveBeenCalledWith(
      `workers/${WorkersActions.GET_WORKERS_DATA}`
    );
  });
  it("commits a status mutation when component is mounted", async () => {
    const wrapper = factory(WorkersList, {});
    //await wrapper.find(".commit").emitted();
    expect(mutations.setStatus).toHaveBeenCalledWith({}, 0);
  });
});
