import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNewComponent } from './forms-new.component';

describe('FormsNewComponent', () => {
  let component: FormsNewComponent;
  let fixture: ComponentFixture<FormsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
