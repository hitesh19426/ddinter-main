import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrugNameForm } from '../interfaces/DrugNameFormInterface';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getDrugNamesForm () : FormGroup<DrugNameForm> {
    return this.formBuilder.group<DrugNameForm>({
      name: this.formBuilder.control<string|null>(null, [Validators.required])
    })
  }
}
