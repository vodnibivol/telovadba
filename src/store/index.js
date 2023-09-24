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
          repetitions: 8, // optional, def.8
          cooldown: 30, // optional, def.30
        },
        // {
        //   id: 3,
        // },
      ],
      notes: '',
    },
  ],
});

// GLOBAL IMPORTABLE FUNCTIONS
export const baseUrl = process.env.BASE_URL;

// img load error event
export function imgError(e) {
  e.target.style.display = 'none'; // or: e.target.src = "/broken-img-png";
}

export const modal = reactive({
  isOpen: false,
  name: '',
  props: '',

  methods: {
    open(name, props) {
      this.isOpen = true;
      document.body.classList.add('modal-open'); // TODO: reactive
    },
    close(name, props) {
      this.isOpen = false;
      document.body.classList.remove('modal-open');
    },
  },
});
