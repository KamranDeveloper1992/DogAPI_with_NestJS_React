import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  async getDogImage(): Promise<any> {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }


}
