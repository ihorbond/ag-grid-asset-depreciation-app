import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeRenderer } from './cell-renderers/datetime-renderer';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [CalculatorComponent,DateTimeRenderer],
  imports: [
    CommonModule,
    AgGridModule.withComponents([DateTimeRenderer]),
  ],
  exports: [CalculatorComponent]
})
export class DepreciationCalculatorModule { }
