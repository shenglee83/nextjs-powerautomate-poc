const required = {
  value: true,
  message: "This field is required",
};

const rules = {
  name: {
    required,
  },
  salutation: {
    required,
  },
  nric: {
    required,
    validate: {
      validateNRIC: (value: any) => {},
      validateNRICFormat: (value: any) => {
        const regex = /\d{6}-\{2}-\d{4}/;

        return regex.test(value) ? undefined : "Invalid NRIC format";
      },
    },
  },
  passport: {
    required,
  },
  amountOnly: {
    required
  },
};
