import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appForceNumber]',
})
export class ForceNumberDirective {
  @HostListener('keydown', ['$event']) preventKey(event: KeyboardEvent): void {
    if (event.key === 'e') {
      event.preventDefault();
    }
  }
}
