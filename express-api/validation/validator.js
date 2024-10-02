const {body,validationResult}=require('express-validator')

// category validation
exports.categoryValidation=[
    body('category_name')
    .notEmpty().withMessage('category name is required')
    .isLength({min:3}).withMessage('category name must be of at least 3 characters')
    .isString().withMessage('category name must be a string')
]

// product validation
exports.productValidation=[
    body('product_name')
    .notEmpty().withMessage('product name is required')
    .isLength({min:3}).withMessage('product name must be of at least 3 characters')
    .isString().withMessage('product name must be a string'),

    body('product_price')
    .notEmpty().withMessage('product price is required')
    .isNumeric().withMessage('price must be a numeric value')
    .isFloat({min:0}).withMessage('price must be a positive number'),

    body('countInStock')
    .notEmpty().withMessage('product stock is required')
    .isNumeric().withMessage('stock must be a numeric value')
    .isInt({min:0}).withMessage('stock must be a whole number'),

    body('product_description')
    .notEmpty().withMessage('product description is required')
    .isLength({min:20}).withMessage('product description must be of at least 20 characters')
    .isString().withMessage('product description must be a string'),

    body('category')
    .notEmpty().withMessage('category is required')
    .isString().withMessage('category must be a string'),

]

// user validation 
exports.userValidation=[
    body('name')
    .notEmpty().withMessage('name is required')
    .isLength({min:2}).withMessage('name must be of at least 2 characters')
    .isString().withMessage('name must be a string'),

    body('email')
    .notEmpty().withMessage('email is required')
    .isEmail().withMessage('email format is incorrect'),

    body('password')
    .notEmpty().withMessage('password is required')
    .isLength({min:8}).withMessage('password must contain 8 characters or more')
    .matches(/[a-z]/).withMessage('password must contain at least one lowercase alphabet')
    .matches(/[A-Z]/).withMessage('password must contain at least one uppercase alphabet')
    .matches(/[0-9]/).withMessage('password must contain at least one numeric value')
    .matches(/[@#$?_-]/).withMessage('password must contain at least one special character')

]

// password validation 
exports.passwordValidation=[
    body('password')
    .notEmpty().withMessage('password is required')
    .isLength({min:8}).withMessage('password must contain 8 characters or more')
    .matches(/[a-z]/).withMessage('password must contain at least one lowercase alphabet')
    .matches(/[A-Z]/).withMessage('password must contain at least one uppercase alphabet')
    .matches(/[0-9]/).withMessage('password must contain at least one numeric value')
    .matches(/[@#$?_-]/).withMessage('password must contain at least one special character')
]

//validation result handler 
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.isEmpty()){
        return next()
    }
    return res.status(400).json({error:errors.array()[0].msg})
}