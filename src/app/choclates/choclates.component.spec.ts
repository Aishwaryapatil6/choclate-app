import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoclatesComponent } from './choclates.component';

describe('ChoclatesComponent', () => {
  let component: ChoclatesComponent;
  let fixture: ComponentFixture<ChoclatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoclatesComponent]
    });
    fixture = TestBed.createComponent(ChoclatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
