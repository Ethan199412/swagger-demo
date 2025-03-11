import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { HelloWorldReqDto, HelloWorldResDto } from './dto/hello-world.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  @ApiResponse({
    status: 201,
    description: 'hello world',
    type: HelloWorldResDto,
  })
  async getHello(@Body() body: HelloWorldReqDto) {
    return await this.appService.getHello();
  }
}
