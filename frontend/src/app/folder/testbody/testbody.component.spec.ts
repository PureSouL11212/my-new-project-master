import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbodyComponent } from './testbody.component';

describe('TestbodyComponent', () => {
  let component: TestbodyComponent;
  let fixture: ComponentFixture<TestbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
