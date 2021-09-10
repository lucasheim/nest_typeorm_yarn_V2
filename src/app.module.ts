import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sap',
      host: 'localhost',
      port: 39041,
      username: 'SYSTEM',
      password: 'P3tr0br@s',
      synchronize: true,
      entities: [User],
      migrations: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
