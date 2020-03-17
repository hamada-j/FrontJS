import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegasComponent } from './colegas.component';

describe('ColegasComponent', () => {
  let component: ColegasComponent;
  let fixture: ComponentFixture<ColegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
