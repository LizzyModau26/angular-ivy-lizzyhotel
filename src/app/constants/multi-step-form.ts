const PROV_LIST = [
  { name: 'Gauteng', code: 'gp' },
  { name: 'Limpopo', code: 'Lp' },
  { name: 'KwaZuluNatal', code: 'kzn' },
  { name: 'Northern Cape', code: 'nc' },
  { name: 'Western Cape', code: 'wc' },
  { name: 'Eastern Cape', code: 'ec' },
  { name: 'Free State', code: 'fc' },
  { name: 'North West', code: 'nw' },
  { name: 'Mpumalang', code: 'mp' }
];
const ROOM_LIST = [
  { name: '1 room', code: '1' },
  { name: '2 rooms', code: '2' },
  { name: '3 rooms', code: '3' },
  { name: '4 rooms', code: '4' },
  { name: '5+ rooms', code: '5' },

  
];
const CTY_LIST = [
  { name: 'VISA', code: 'vis' },
  { name: 'MasterCard', code: 'mas' },
 
];

const OCC_LIST = [
  { name: '1 person', code: '1' },
  { name: '2 people', code: '1' },
  { name: '3 people', code: '1' },
  { name: '4 people', code: '1' },
  { name: '5+ people', code: '1' },
];
const MON_LIST = [
  { name: '01', code: '1' },
  { name: '02', code: '1' },
  { name: '03', code: '1' },
  { name: '04', code: '1' },
  { name: '05', code: '1' },
   { name: '06', code: '1' },
  { name: '07', code: '1' },
  { name: '08', code: '1' },
  { name: '09', code: '1' },
  { name: '10', code: '1' },
  { name: '11', code: '1' },
  { name: '12', code: '1' },
];

const YEAR_LIST = [
  { name: '2020', code: '20' },
  { name: '2021', code: '21' },
  { name: '2022', code: '22' },
  { name: '2023', code: '23' },
  { name: '2024', code: '24' },
];

const DATA_STEP_1 = {
  firstName: { type: 'text', validations: {}, errors: {}, placeholder: 'First Name' },
  lastName: { type: 'text', validations: {}, errors: {}, placeholder: 'Last Name' },
  dateOfBirth: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Date of Birth'
  },
   idNo: {
    type: 'number',
    validations: {
      pattern: /^\d{13}$/
    },
    errors: {
      pattern: 'Please enter a valid ID number'
    },
    placeholder: 'ID Number'
  },
  email: { type: 'text', validations: {}, errors: {}, placeholder: ' Email Address' },
   province: {
    type: 'select',
    options: PROV_LIST,
    validations: {},
    errors: {},
    placeholder: 'Province Of Choice'
  },
  dateOfArrival: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Date of Arrival'
  },
  dateOfDeparture: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Date of Departure'
  },
   rooms: {
    type: 'select',
    options: ROOM_LIST,
    validations: {},
    errors: {},
    placeholder: 'Number of Rooms Required'
  },
   occupants: {
    type: 'select',
    options: OCC_LIST,
    validations: {},
    errors: {},
    placeholder: 'Number of occupants'
  }
};


const DATA_STEP_2 = {
    cardtype: {
    type: 'select',
    options: CTY_LIST,
    validations: {},
    errors: {},
    placeholder: 'Card Type Required'
  },
  cardNo: {
    type: 'number',
    validations: {
      pattern: /^\d{13}$/
    },
    errors: {
      pattern: 'Please enter a valid card number'
    },
    placeholder: 'Card Number'
  },
    expirymonth: {
    type: 'select',
    options: MON_LIST,
    validations: {},
    errors: {},
    placeholder: 'Card Expiry Required'
  },
    expiryyear: {
    type: 'select',
    options: YEAR_LIST,
    validations: {},
    errors: {},
    placeholder: 'Card Expiry Required'
  },
  cardholder: { type: 'text', validations: {}, errors: {}, placeholder: ' Cardd Holders Name' },
  cvv: {
    type: 'number',
    validations: {
      required: true,
      minLength: 3
    },
    errors: {
      required: 'This field can not be left blank',
      minlength: 'Minimum length should be 3 numbers'
    },
    placeholder: 'CVV Number'
  }
  
};

const STEP_ITEMS = [
  { label: 'Booking Details', data: DATA_STEP_1 },
  { label: 'Payment Details', data: DATA_STEP_2 },
  { label: 'Review & Submit', data: {} }
];

export { STEP_ITEMS }