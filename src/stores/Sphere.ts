import { defineStore } from "pinia";

export const usePiStore = defineStore({

  id: "sphere",
  state: () => ({
    rayon: 0,
    perimetre: 0,
    surface: 0,
    volume: 0,
  }),

  getters: {
    getSurf: (state) => state.surface,
    getVol: (state) => state.volume,
  },

  actions: {},

});