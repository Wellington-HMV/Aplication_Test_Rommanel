import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoggedComponent } from './logged.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoggedComponent', () => {
  let component: LoggedComponent;
  let fixture: ComponentFixture<LoggedComponent>;
  let service;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterModule,
        MatInputModule,
        MatSliderModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [LoggedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedComponent);
    component = fixture.componentInstance;
    service = component['_registerService'];
    fixture.detectChanges();
  });

  it('Criação do component', () => {
    expect(component).toBeUndefined();
  });

  //...
});
