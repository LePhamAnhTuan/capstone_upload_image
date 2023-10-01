import { PartialType } from '@nestjs/swagger';
import { CreateCmtDto } from './create-cmt.dto';

export class UpdateCmtDto extends PartialType(CreateCmtDto) {}
