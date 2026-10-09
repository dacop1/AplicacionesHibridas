import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroItemComponent } from './suministro-item.component';

describe('SuministroItemComponent', () => {
  let component: SuministroItemComponent;
  let fixture: ComponentFixture<SuministroItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuministroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
