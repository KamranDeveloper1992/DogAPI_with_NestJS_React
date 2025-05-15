import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dog')
  async getDogImage() {
    const image = await this.appService.getDogImage(); 
    console.log(image); 
    return image;
  }


}
