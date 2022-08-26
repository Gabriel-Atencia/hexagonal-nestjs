import { Controller, Get, Param } from '@nestjs/common';
import { IUserService } from '../aplication/user-service.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: IUserService) {}

  @Get()
  findAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.get(id);
  }
}
