import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaldashboardComponent } from './internaldashboard.component';

describe('InternaldashboardComponent', () => {
  let component: InternaldashboardComponent;
  let fixture: ComponentFixture<InternaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaldashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
