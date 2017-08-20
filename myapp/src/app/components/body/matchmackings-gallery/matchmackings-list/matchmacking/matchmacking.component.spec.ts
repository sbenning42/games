import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmackingComponent } from './matchmacking.component';

describe('MatchmackingComponent', () => {
  let component: MatchmackingComponent;
  let fixture: ComponentFixture<MatchmackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
