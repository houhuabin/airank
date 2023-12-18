import { z } from 'zod'

const zodSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    //age: z.number()
});

export default zodSchema;