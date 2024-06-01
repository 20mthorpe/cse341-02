const { body, validationResult } = require('express-validator')

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

// const presidentValidationRules = () => {
//     return [
//         body('name').isString().isLength({ min: 1, max: 255 }).withMessage('Name must be a string with a length between 1 and 255 characters'),
//         body('birthday').isString().isLength({ min: 1, max: 255 }).withMessage('Birthday must be a string with a length between 1 and 255 characters'),
//         body('birth_location').isString().isLength({ min: 1, max: 255 }).withMessage('Birth location must be a string with a length between 1 and 255 characters'),
//         body('presidential_term').isString().isLength({ min: 1, max: 255 }).withMessage('Presidential term must be a string with a length between 1 and 255 characters'),
//         body('vice_president').isArray().withMessage('Vice president must be an array'),
//         body('first_lady').isString().isLength({ min: 1, max: 255 }).withMessage('First lady must be a string with a length between 1 and 255 characters'),
//         body('political_party').isString().isLength({ min: 1, max: 255 }).withMessage('Political party must be a string with a length between 1 and 255 characters'),
//     ]
// }

// const stateValidationRules = () => {
//     return [
//         body('name').isString().isLength({ min: 1, max: 255 }).withMessage('Name must be a string with a length between 1 and 255 characters'),
//         body('abbreviation').isString().isLength({ min: 1, max: 255 }).withMessage('Abbreviation must be a string with a length between 1 and 255 characters'),
//         body('capital').isString().isLength({ min: 1, max: 255 }).withMessage('Capital must be a string with a length between 1 and 255 characters'),
//         body('population').isNumeric().withMessage('Population must be a number'),
//         body('state_bird').isString().isLength({ min: 1, max: 255 }).withMessage('State bird must be a string with a length between 1 and 255 characters'),
//         body('state_flower').isString().isLength({ min: 1, max: 255 }).withMessage('State flower must be a string with a length between 1 and 255 characters'),
//         body('state_senators').isArray().isLength({ min: 2, max: 2 }).withMessage('State senators must be an array with two elements'),
//     ]
// }

module.exports = {
  //userValidationRules,
    validate
    // presidentValidationRules,
    // stateValidationRules
}