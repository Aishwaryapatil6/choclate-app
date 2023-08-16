import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPartntComponent } from './child-partnt.component';

describe('ChildPartntComponent', () => {
  let component: ChildPartntComponent;
  let fixture: ComponentFixture<ChildPartntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPartntComponent]
    });
    fixture = TestBed.createComponent(ChildPartntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
