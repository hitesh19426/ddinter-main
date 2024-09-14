import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrugService } from './services/drug.service';
import { CommonModule } from '@angular/common';
import { FormBuilderService } from './services/form-builder.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [DrugService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ddinter-main';

  constructor(
    private drugService: DrugService,
    private formBuilderService: FormBuilderService,
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
}
