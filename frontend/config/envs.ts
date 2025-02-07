import { z } from 'zod';

// Las variables de entorno deben tener el mismo nombre que tienen
// en el siguiente schema para que se pueda parsear directamente
const envsSchema = z.object({
  BACKEND_URL: z.string().url(),
});

export default envsSchema.parse(process.env);
