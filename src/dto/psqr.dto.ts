import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PsqrDto {
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNotEmpty()
  @IsNumber()
  num: number;
}