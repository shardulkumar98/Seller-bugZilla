import { ICreateBug } from '../interfaces/Bugs'
import Joi from 'joi'

export function CreateBugSchemaValidator(bugObject: ICreateBug) {
  const schema = Joi.object({
    product: Joi.string().required(),
    summary: Joi.string().required(),
    alias: Joi.string().required().max(40),
    bpp_id: Joi.string().required(),
    bpp_name: Joi.string().required(),
    attachments: Joi.array().items(Joi.string()),
    action: Joi.object({
      complainant_actions: Joi.array().items(
        Joi.object({
          complainant_action: Joi.string().required(),
          short_desc:Joi.string().required(),
          updated_at: Joi.string().required(),
          updated_by: {
            org: {
              name: Joi.string().required(),
            },
            contact: {
              phone: Joi.string().required(),
              email: Joi.string().required(),
            },
            person: {
              name: Joi.string().required(),
            },
          }
        }),
      ),
      respondent_actions: Joi.array().items(
        Joi.object({
          respondent_action: Joi.string().required(),
          short_desc:Joi.string().required(),
          updated_at: Joi.string().required(),
          updated_by: {
            org: {
              name: Joi.string().required(),
            },
            contact: {
              phone: Joi.string().required(),
              email: Joi.string().required(),
            },
            person: {
              name: Joi.string().required(),
            },
          }
        }),
      ),
    }),
  })

  const { error } = schema.validate(bugObject)

  return error
}
