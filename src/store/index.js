// store/index.js

import { reactive } from 'vue';

export const store = reactive({
  count: 23, // test

  filterInput: '',
  selectedFilters: {
    difficulty: [],
    bodyPart: [],
    equipment: [],
  },
});
