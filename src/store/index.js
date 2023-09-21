// STORE
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
});

// GLOBAL IMPORTABLE FUNCTIONS
export const baseUrl = process.env.BASE_URL;

// img load error event
export function imgError(e) {
  e.target.style.display = 'none'; // or: e.target.src = "/broken-img-png";
}
