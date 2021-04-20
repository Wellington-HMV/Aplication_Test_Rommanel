import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [LoggedComponent],
  exports:[LoggedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class LoggedModule { }
