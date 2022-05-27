import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import LoginModule from 'src/auth/login/login.module';
import CommentEntity from 'database/entities/user.entity';
import RegisterEntity from 'database/entities/register.entity';
import RegisterModule from 'src/auth/register/register.module';
import MemberModule from 'src/member/member.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['database/.config.env', '.base.env'],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(7072),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      logging: false,
      entities: [
        CommentEntity,
        RegisterEntity,
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    MemberModule,
    LoginModule,
    RegisterModule,
  ],
  controllers: [],
  providers: [],
  exports: [LoginModule],
})
export default class AppModule {}
