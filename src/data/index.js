import {
  ref
} from 'vue';

export const contactData = ref([{
    id: 1,
    firstName: "Rui",
    lastName: "Peng",
    email: "peng0046@algonquinlive.com"
  },
  {
    id: 2,
    firstName: "Laura",
    lastName: "Clow",
    email: "clow0027@algonquinlive.com"
  },
  {
    id: 3,
    firstName: "Regina",
    lastName: "Trevinosalinas",
    email: "trev0035@algonquinlive.com"
  },
  {
    id: 4,
    firstName: "Checheng",
    lastName: "Lee",
    email: "lee00869@algonquinlive.com"
  },
  {
    id: 5,
    firstName: "Fernando",
    lastName: "Sada",
    email: "sada0036@algonquinlive.com"
  },
  {
    id: 6,
    firstName: "Natalia",
    lastName: "Reyesvillamil",
    email: "reye0093@algonquinlive.com"
  },
  {
    id: 7,
    firstName: "Su Cheng",
    lastName: "Lee",
    email: "lees1@algonquincollege.com"
  },
  {
    id: 8,
    firstName: "Leighton",
    lastName: "Rodney",
    email: "rodneyl@algonquincollege.com"
  },
  {
    id: 9,
    firstName: "Jose",
    lastName: "Carrillo",
    email: "carrilj@algonquincollege.com"
  },
  {
    id: 10,
    firstName: "Jessica",
    lastName: "Jackson",
    email: "jacksoj3@algonquincollege.com"
  }
]);

// Save contact data to localStorage
export const saveContactData = () => {
  localStorage.setItem('contacts', JSON.stringify(contactData.value));
};

// Load contact data from localStorage
export const loadContactData = () => {
  const data = localStorage.getItem('contacts');
  if (data) {
    contactData.value = JSON.parse(data);
  } else {
    contactData.value = []; // Initialize as an empty array if no data found
  }
};