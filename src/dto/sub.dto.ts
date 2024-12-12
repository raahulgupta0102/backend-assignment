import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class SubDto {
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  numA: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  numB: number;
}
