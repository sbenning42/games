import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmackingFormComponent } from './matchmacking-form.component';

describe('MatchmackingFormComponent', () => {
  let component: MatchmackingFormComponent;
  let fixture: ComponentFixture<MatchmackingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmackingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmackingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
