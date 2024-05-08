import { Directive, HostBinding } from '@angular/core';


@Directive({
  selector: '[fonte]'
})
export class FonteDirective {

  @HostBinding('style.fontFamily') tipo = "arial"

  constructor() { }

}
