import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTComponent } from './bottom-t.component';

describe('BottomTComponent', () => {
  let component: BottomTComponent;
  let fixture: ComponentFixture<BottomTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
