import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class FiboDto {
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  num: number;
}
