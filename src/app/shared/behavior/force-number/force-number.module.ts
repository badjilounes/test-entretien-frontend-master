import { NgModule } from '@angular/core';
import { ForceNumberDirective } from './force-number.directive';

@NgModule({
  declarations: [ForceNumberDirective],
  exports: [ForceNumberDirective],
})
export class ForceNumberModule {}
