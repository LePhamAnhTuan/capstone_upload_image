import { PartialType } from '@nestjs/swagger';
import { CreateDbImageDto } from './create-db_image.dto';

export class UpdateDbImageDto extends PartialType(CreateDbImageDto) {}
