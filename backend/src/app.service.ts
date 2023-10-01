import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  title = "Helo world"

  getHello(): string {
    return 'Hello Node33!';
  }

  tinhTong(soMot: number, soHai: number): number {
    return soMot + soHai;
  }
}
