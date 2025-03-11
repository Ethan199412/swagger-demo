import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class HelloWorldReqDto {
  @ApiProperty({
    example: 'user@example.com',
    description: '用户邮箱（唯一标识）',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '张三',
    description: '用户姓名（2-20字符）',
    minLength: 2,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  username: string;
}

export class HelloWorldResDto {
  @ApiProperty({
    example: 'Hello World!',
    description: '返回信息',
  })
  message: string;
}