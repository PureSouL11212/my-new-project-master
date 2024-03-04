import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancel1Component } from './cancel1.component';

describe('Cancel1Component', () => {
  let component: Cancel1Component;
  let fixture: ComponentFixture<Cancel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cancel1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cancel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
