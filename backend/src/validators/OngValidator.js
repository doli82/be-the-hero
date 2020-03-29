const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(1000000000).max(99999999999),
            city: Joi.string().required(),
            uf: Joi.string().length(2)
        })
    })
};