import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, 
  MatNativeDateModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatInputModule, MatNativeDateModule ],
})
export class MyOwnCustomMaterialModule { }
