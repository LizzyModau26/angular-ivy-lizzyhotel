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
  idNo: { type: 'text', validations: {}, errors: {}, placeholder: 'ID Number' },
  email: { type: 'text', validations: {}, errors: {}, placeholder: ' Email Address' },
   province: {
    type: 'select',
    options: PROV_LIST,
    validations: {},
    errors: {},
    placeholder: 'Country'
  }
};


const DATA_STEP_2 = {
  phone: {
    type: 'phone',
    validations: {
      pattern: /^\d{10}$/
    },
    errors: {
      pattern: 'Please enter a valid phone number'
    },
    placeholder: 'Contact Number'
  },
  otp: {
    type: 'number',
    validations: {
      required: true,
      minLength: 4
    },
    errors: {
      required: 'This field can not be left blank',
      minlength: 'Minimum length should be 4 characters'
    },
    placeholder: 'One Time Password'
  }
};

const STEP_ITEMS = [
  { label: 'Booking Details', data: DATA_STEP_1 },
  { label: 'Payment Details', data: DATA_STEP_2 },
  { label: 'Review & Submit', data: {} }
];

export { STEP_ITEMS }