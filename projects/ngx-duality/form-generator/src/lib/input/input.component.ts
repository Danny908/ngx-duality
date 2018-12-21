import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  @ViewChild('el') el: ElementRef;
  field: FormField;
  group: FormGroup;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const { extras } = this.field;
    if (this.el && extras) {
      const { nativeElement: element } = this.el;
      this.applyAttributes(extras, element);
    }
  }

  applyAttributes(extras: Object, element: TemplateRef<any>) {
    Object.keys(extras).forEach(key => {
      this.renderer.setAttribute(element, key, extras[key]);
    });
  }

}
