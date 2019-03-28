import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-input]',
  templateUrl: './input.component.html'
})
export class InputComponent implements AfterViewInit {
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor(
    private renderer: Renderer2,
    // private validationService: ValidationService
  ) { }

  ngAfterViewInit() {
    // const input = this.input.nativeElement;
    // const { attrs, value, type, options } = this.field;
    // this.keys = type === 'select' && Object.keys(options);
    // if (attrs) {
    //   this.setAttributes(attrs, input);
    // }
  }

  boolToVal(event: MouseEvent, index: number): void {
    const { options } = this.field;
    if ((event.target as HTMLInputElement).checked) {
      const formArray = this.group.get(this.controlName).get([index]); 
      formArray.setValue(options[index]);
    }
  }

  setAttributes(attrs: Object, input: TemplateRef<any>) {
    Object.keys(attrs).forEach(key => {
      this.renderer.setAttribute(input, key, attrs[key]);
    });
  }

  checkValueType(value: any, tag: string): string | number {
    return typeof value !== 'object' ? value : value[tag];
  }

}
