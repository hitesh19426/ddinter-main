import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrugService } from './services/drug.service';
import { CommonModule } from '@angular/common';
import { FormBuilderService } from './services/form-builder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [DrugService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ddinter-main';
  drugs$: Observable<string[]> = this.drugService.getAllUniqueDrugs();

  selectedDrugsList: any[] = [];
  selectedDrugListDataSource$: MatTableDataSource<any[]> =
    new MatTableDataSource<any[]>();

  displayedColumns: string[] = ['name', 'action'];

  INTERACTION_EXAMPLE: any[] = [
    { name: 'Aluminum hydroxide' },
    { name: 'Dolutegravir' },
    { name: 'Aprepitant' },
    { name: 'Abacavir' },
    { name: 'Orlistat' },
    { name: 'Dexamethasone' },
  ];

  constructor(
    private drugService: DrugService,
    private formBuilderService: FormBuilderService
  ) {}

  drugNameForm = this.formBuilderService.getDrugNamesForm();

  ngOnInit(): void {
    this.drugService.getAllUniqueDrugs().subscribe({
      next: (drugs: any) => {
        console.log('drugs', drugs);
      },
      error: (error) => console.log(error),
    });
  }

  addDrug() {
    this.selectedDrugsList.push({
      name: this.drugNameForm.value.name,
    });
    this.selectedDrugListDataSource$.data = this.selectedDrugsList;
  }

  onResetClick() {
    this.selectedDrugListDataSource$.data = this.selectedDrugsList = [];
  }

  onLoadExample() {
    this.selectedDrugListDataSource$.data = this.selectedDrugsList =
      this.INTERACTION_EXAMPLE;
  }
}
