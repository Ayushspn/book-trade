import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() toggelValue: boolean;
  constructor() { }
  @HostBinding('toggleDropDown') toggleValue;
  @HostListener('mouseover') onHover() {
    console.log('this.toggleValue', this.toggleValue);
  }
}
