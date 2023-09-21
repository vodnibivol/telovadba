// store/index.js

import { reactive } from 'vue';

export const store = reactive({
  // search
  resultsLimit: 12,
  filterInput: '',
  selectedFilters: {
    difficulty: [],
    bodyPart: [],
    equipment: [],
  },

  // img load error event
  imgError(e) {
    e.target.remove(); // or: e.target.src = "/broken-img-png";
  },
});
