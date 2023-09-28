// STORE
import { reactive, watch } from 'vue';
import EXERCISES from '@/assets/exercises.json';

export const store = reactive({
  // search
  resultsLimit: 12,
  filterInput: '',
  selectedFilters: {
    difficulty: [],
    bodyPart: [],
    equipment: [],
  },

  // workouts
  workouts: [
    {
      id: 1, // '816a47b3'
      title: 'Stretching Workout',
      sets: 4, // optional; def.4
      exercises: [
        {
          id: 31,
          repetitions: 8, // optional, def.8
          cooldown: 30, // optional, def.30
        },
        {
          id: 123,
        },
      ],
      notes: 'Ta trening moram narediti na začetku da bom dobro raztegnjen.',
    },
    {
      id: 2, // '510bb15e'
      title: 'Muscle Workout',
      exercises: [
        {
          id: 3,
        },
      ],
      notes: '',
    },
  ],
  exercises: EXERCISES,
});

if ('TD_PERSONAL_WORKOUTS' in localStorage) {
  store.workouts = JSON.parse(localStorage.getItem('TD_PERSONAL_WORKOUTS'));
}

if ('TD_EXERCISES' in localStorage) {
  store.exercises = JSON.parse(localStorage.getItem('TD_EXERCISES'));
}

watch(
  () => store.workouts,
  (workouts) => localStorage.setItem('TD_PERSONAL_WORKOUTS', JSON.stringify(workouts)),
  { deep: true }
);

watch(
  () => store.exercises,
  (exercises) => localStorage.setItem('TD_EXERCISES', JSON.stringify(exercises)),
  { deep: true }
);

// --- GLOBAL IMPORTABLE FUNCTIONS

export const baseUrl = process.env.BASE_URL;

// img load error event
export function imgError(e) {
  e.target.style.display = 'none'; // or: e.target.src = "/broken-img.png";
}
