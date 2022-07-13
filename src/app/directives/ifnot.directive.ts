import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(flag:boolean) {
    if (!flag) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
