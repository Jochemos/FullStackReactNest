import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.setGlobalPrefix('v2');

  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());

  await app.listen(process.env.START_PORT || 7072);
}
bootstrap();
