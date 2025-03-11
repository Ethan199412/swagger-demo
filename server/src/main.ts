import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API 文档标题')
    .setDescription('接口文档示例（含 Hello World 接口）')
    .setVersion('1.0')
    .addTag('默认接口') // 接口分组标签
    .build();

  const document = SwaggerModule.createDocument(app as any, config);
  SwaggerModule.setup('api', app as any, document); // 文档访问路径为 /api

  await app.listen(3000);
}
bootstrap();
