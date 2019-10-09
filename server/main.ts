import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as sts from 'source-map-support';

sts.install();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600,
  });
  await app.listen(4000);
}
bootstrap().catch(err => console.error(err));
