const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.calories) {
      errors.calories = 'Required'
    }
    return errors
  }
  export default validate