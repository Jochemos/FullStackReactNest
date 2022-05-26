import {
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

export default class MemberDataModel {
  commentId?: number;

  @MinLength(1, {
    message: 'Enter comment before send',
  })
  @MaxLength(700, {
    message: 'Your comment is too long',
  })
  @IsNotEmpty()
    comment: string;

  created_At?: Date;
}
