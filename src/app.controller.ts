import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AddDto } from './dto/add.dt';
import { SubDto } from './dto/sub.dto';
import { MultiplyDto } from './dto/multiply.dto';
import { EvenOddDto } from './dto/even-odd.dto';
import { PrimeDto } from './dto/prime.dto';
import { FiboDto } from './dto/fibo.dto';
import { PsqrDto } from './dto/psqr.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/add')
  getAdd(@Query() params: AddDto): number {
    return this.appService.getAdd(params);
  }

  @Post('/add')
  postAdd(@Body() params: AddDto): number {
    return this.appService.postAdd(params);
  }

  @Get('/sub')
  getSub(@Query() params: SubDto): number {
    return this.appService.getSub(params);
  }

  @Post('/add')
  postSub(@Body() params: SubDto): number {
    return this.appService.postSub(params);
  }

  @Get('/multiply')
  getMultiply(@Query() params: MultiplyDto): number {
    return this.appService.getMultiply(params);
  }
  @Post('/multiply')
  postMultiply(@Body() params: MultiplyDto): number {
    return this.appService.postMultiply(params);
  }
  @Get('/even-odd')
  getEvenOdd(@Query() params: EvenOddDto): string {
    return this.appService.getEvenOdd(params);
  }
  @Get('/prime')
  getPrime(@Query() params: PrimeDto): string {
    return this.appService.getPrime(params);
  }
  @Get('/fibo')
  getFibo(@Query() params: FiboDto): any {
    return this.appService.getFibo(params);
  }
  @Get('/psqr')
  getPsqr(@Query() params: PsqrDto): any {
    return this.appService.getPsqr(params);
  }
}
