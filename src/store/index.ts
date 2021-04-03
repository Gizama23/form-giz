import { ItemProp, RootObject } from "@/Models/Item";
import { createStore } from "vuex";

export default createStore({
  state: {
    file: {} as RootObject,
  },
  mutations: {
    setFileEn(state: { file: RootObject }, payload: ItemProp) {
      state.file.en = payload;
    },
    setFilePt(state: { file: RootObject }, payload: ItemProp) {
      state.file.pt = payload;
    },
    setFile(state: { file: RootObject }, payload: RootObject) {
      state.file = payload;
    },
  },
  getters: {
    getFileEn(state: { file: RootObject }) {
      return state.file.en;
    },
    getFilePt(state: { file: RootObject }) {
      return state.file.pt;
    },
    getFile(state: { file: RootObject }) {
      return JSON.stringify(state.file);
    },
  },
});
