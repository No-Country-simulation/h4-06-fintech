import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API de IUPI')
    .setDescription(
      `
### Tecnologías Utilizadas
  - **NestJS**: Framework modular y robusto para aplicaciones Node.js.
  - **TypeScript**: Desarrollo con tipado fuerte para mayor seguridad.
  - **Postgres**:
  - **JWT**: Autenticación segura y eficiente.
  - **Bcrypt**: Encriptación de contraseñas.
  - **Class-Validator & Class-Transformer**: Validación y transformación de datos.
  - **Swagger**: Documentación interactiva de la API.
  - **Helmet**: Seguridad mejorada con encabezados HTTP.
  - **Nodemailer**: Envío de correos electrónicos.
  - **RxJS**: Programación reactiva.
  - **Prettier & ESLint**: Calidad y consistencia del código.
  - **Nodemon**: Recarga automática en desarrollo.
  - **Jest & Supertest**: Pruebas unitarias y de integración.
  
  ### Recursos
  - [Documentación oficial de NestJS](https://docs.nestjs.com)
  - [Repositorio en GitHub](https://github.com/tu-usuario/tu-repositorio)
  `,
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
}
