import { defineStore } from "pinia";

export const usePiStore = defineStore({

  id: "sphere",
  state: () => ({
    rayon: "",
    perimetre: "",
    surface: "",
    volume: "",
  }),

  getters: {
    getSurf: (state) => state.surface,
    getVol: (state) => state.volume,
  },

  actions: {},

});