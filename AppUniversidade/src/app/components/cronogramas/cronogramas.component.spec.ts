import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramasComponent } from './cronogramas.component';

describe('CronogramasComponent', () => {
  let component: CronogramasComponent;
  let fixture: ComponentFixture<CronogramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CronogramasComponent]
    });
    fixture = TestBed.createComponent(CronogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
