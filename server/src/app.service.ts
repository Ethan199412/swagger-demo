import { Injectable } from '@nestjs/common';
import { HelloWorldResDto } from './dto/hello-world.dto';

@Injectable()
export class AppService {
  getHello(): HelloWorldResDto {
    return { message: 'Hello World!' };
  }
}
