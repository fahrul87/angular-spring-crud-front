import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhDeleteComponent } from './seacrh-delete.component';

describe('SeacrhDeleteComponent', () => {
  let component: SeacrhDeleteComponent;
  let fixture: ComponentFixture<SeacrhDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeacrhDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacrhDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
