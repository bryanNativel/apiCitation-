import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Controller('api/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.favoritesService.findAll(userId);
  }

  @Get(':idFav/:idUser')
  findOne(@Param('idFav') idFav: string,@Param('idUser') idUser: string) {
    return this.favoritesService.findOne(idFav,idUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(id);
  }
}
