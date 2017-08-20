import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmackingDetailComponent } from './matchmacking-detail.component';

describe('MatchmackingDetailComponent', () => {
  let component: MatchmackingDetailComponent;
  let fixture: ComponentFixture<MatchmackingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmackingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmackingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
