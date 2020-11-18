import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';


@NgModule({
  // Exportamos o componente para ser usado em outros módulos
  exports: [
  ],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule
  ]
})

export class PhotosModule {

}
