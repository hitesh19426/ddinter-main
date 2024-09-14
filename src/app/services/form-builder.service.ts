import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DrugNameForm } from '../interfaces/DrugNameFormInterface';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    private formBuilder: NonNullableFormBuilder
  ) { }

  getDrugNamesForm () : FormGroup<DrugNameForm> {
    return this.formBuilder.group<DrugNameForm>({
      name: this.formBuilder.control<string>('', [Validators.required])
    })
  }
}
