import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[HardCover]'
})
export class CustomDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }

}
