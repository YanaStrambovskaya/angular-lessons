import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('color') color: string = 'black';
  @Input('fontWeight') fontWeight: string = 'normal';
  @Input('fontSize') fontSize: string = 'normal';

  @HostBinding('style.fontSize') fontSizeNew:string = '30px'

  constructor(private el:ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event']) onClick(event:Event) {
    console.log(event.target);
  }

  @HostListener('mouseenter') onHover () {
    this.fontSizeNew = this.fontSize;
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }

  @HostListener('mouseleave') onLeave () {
    this.fontSizeNew = '30px';
    this.r.setStyle(this.el.nativeElement, 'fontWeight', 'normal');
    this.r.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
