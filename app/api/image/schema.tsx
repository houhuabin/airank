import { z } from 'zod'

const schema = z.object({
    title: z.string().min(1).max(200),
    width: z.number().int().positive(),
    issue: z.number().int().positive(),
    //url: z.string().url(),
    tags: z.array(z.string()),
    height: z.number().int().positive()
});

export default schema;