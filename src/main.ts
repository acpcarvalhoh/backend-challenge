import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Catálogo de Filmes - Documentação com Swagger')
    .setDescription(
      'A API de Catálogo de Filmes é uma aplicação que fornece acesso a informações sobre filmes, como títulos, diretores, classificações e muito mais. Esta documentação foi gerada com o Swagger (também conhecido como OpenAPI), uma biblioteca popular para documentação de APIs.',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(env.PORT);
}
bootstrap();
