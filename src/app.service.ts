import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAdd(params: any): number {
    return params.numA + params.numB;
  }
  postAdd(params: any): number {
    return params.numA + params.numB;
  }

  getSub(params: any): number {
    return params.numA - params.numB;
  }
  postSub(params: any): number {
    return params.numA - params.numB;
  }
  getMultiply(params: any): number {
    return params.numA * params.numB;
  }
  postMultiply(params: any): number {
    return params.numA * params.numB;
  }
  getEvenOdd(params: any): string {
    if (params.num % 2 == 0) return 'Even';
    else return 'odd';
  }
  getPrime(params: any): string {
    if (params.num <= 1) {
      return 'not prime';
    }
    for (let i = 2; i < params.num; i++) {
      if (params.num % i === 0) {
        return 'not prime';
      }
    }
    return 'prime';
  }

  getFibo(params: any): any {
    let n1 = 1,
      n2 = 2,
      n3;
    const fibo = [];
    if (params.num >= 1) {
      fibo.push(n1);
    }
    if (params.num >= 2) {
      fibo.push(n2);
    }

    for (let i = 1; i <= params.num - 2; i++) {
      n3 = n2 + n1;
      n1 = n2;
      n2 = n3;
      fibo.push(n3);
    }
    return fibo;
  }
  getPsqr(params: any): string {
    for (let i = 2; i < params.num; i++) {
      if (params.num == i * i) {
        return 'Perfect Square';
      }
    }
    return 'Not Perfect square';
  }
}
