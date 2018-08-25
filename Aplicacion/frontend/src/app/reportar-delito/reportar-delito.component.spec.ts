import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarDelitoComponent } from './reportar-delito.component';
import { ActivatedRoute, Router } from "@angular/router/";
describe('ReportarDelitoComponent', () => {
  let component: ReportarDelitoComponent;
  let fixture: ComponentFixture<ReportarDelitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarDelitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarDelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
