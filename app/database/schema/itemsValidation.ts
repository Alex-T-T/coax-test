import z from 'zod';

const itemValidation = z
    .object({
        name: z.string(),
        priority: z.number(),
    })
    .required();

export default itemValidation;
