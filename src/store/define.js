import { defineStore } from "pinia";

export const useDefineStore = defineStore("define", {
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {
    addAccount() {
      this.count++;
    },
  },
});
