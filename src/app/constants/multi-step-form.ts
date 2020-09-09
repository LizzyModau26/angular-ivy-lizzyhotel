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
  }
};


const DATA_STEP_2 = {
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