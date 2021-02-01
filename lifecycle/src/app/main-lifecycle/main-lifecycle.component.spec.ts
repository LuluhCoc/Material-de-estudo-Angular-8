import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainLifecycleComponent } from './main-lifecycle.component';

describe('MainLifecycleComponent', () => {
  let component: MainLifecycleComponent;
  let fixture: ComponentFixture<MainLifecycleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
