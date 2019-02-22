import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
// import { FormField } from '@ngx-duality/types';

export interface FormField {
  label?: string;
  element?: string;
  type?: string;
  value?: any;
  valueParam?: string;
  multiple?: boolean;
  options?: {[key: string]: FormField};
  validators?: Array<any>;
  asyncValidators?: Array<any>;
  errors?: {[key: string]: any};
  attrs?: {[key: string]: any};
}
@Component({
  selector: 'duality-form-generator',
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="submit()">
      <ng-container
        *ngFor="let key of keys"
        dualityFormGenerator
        [group]="form"
        [field]="fields[key]"
        [controlName]="key">
      </ng-container>
      <button
        *ngIf="submitBtn"
        type="submit">
          Submit
      </button>
      <button
        *ngIf="resetBtn"
        type="submit">
          Reset
      </button>
    </form>
  `,
  styles: []
})
export class FormGeneratorComponent implements OnInit {
  @Input() fields: {[key: string]: FormField};
  @Input() data: {[key: string]: any};
  @Input() submitBtn = true;
  @Input() resetBtn: boolean;
  form: FormGroup;
  keys: Array<string> = [];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.createFormGroup(this.fields);
    this.keys = Object.keys(this.fields);
    console.log('%cFORM CREATED', 'color: green; font-weight: bold');
    console.log(this.form);
  }

  createFormGroup(fields: {[key: string]: FormField}): FormGroup {
    const form = this.formBuilder.group({});
    for (const field in fields) {
      if (fields[field].type === 'checkbox') {
        form.addControl(field, this.createFormArray(fields[field]));
      } else {
        form.addControl(field, this.newControl(fields[field]));
      }
    }
    // fields.forEach(field => {
    //   if (field.group && field.group.length > 0) {
    //     if (field.type === 'array') {
    //       form.addControl(field.controlName, this.createFormArray(field.group));
    //     } else {
    //       form.addControl(field.controlName, this.createFormGroup(field.group));
    //     }
    //   } else {
    //     if (field.controlName) {
    //         form.addControl(field.controlName, this.createControl(field));
    //     }
    //   }
    // });
    return form;
  }

  createFormArray(field: FormField): FormArray {
    const { options, value } = field;
    const form = this.formBuilder.array([]);
    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        form.push(this.newControl(options[option]));
      }
    }
    return form;
  }

  newControl(field: FormField): FormControl {
    const { valueParam, value, validators, asyncValidators } = field;
    // if (value) {
    //   return new FormControl(value);
    // }
    // return new FormControl(this.setFormState(valueParam), validators, asyncValidators);
    return new FormControl(value);

  }

  setFormState(valueParam: string): string {
    let state: string;
    if (valueParam && this.data) {
      if (valueParam.includes('.')) {
        valueParam.split('.').forEach(sp => state = this.data[sp]);
        return state;
      }
      state = this.data[valueParam];
      return state;
    }
    return null;
  }

  submit() {
    console.log('%cSUBMIT', 'color: green; font-weight: bold');
    console.log(this.form.value);
  }

}