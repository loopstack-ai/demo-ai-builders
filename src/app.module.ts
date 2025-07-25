import { Module } from '@nestjs/common';
import { loadConfiguration, LoopCoreModule } from '@loopstack/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoopstackApiModule } from '@loopstack/api';
import { LlmModule } from '@loopstack/llm';
import { WebModule } from '@loopstack/web';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'admin',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LoopCoreModule.forRoot({
      configs: loadConfiguration(__dirname + '/config'),
    }),
    LoopstackApiModule,
    LlmModule,
    WebModule,
  ],
  providers: [],
})
export class AppModule {}
