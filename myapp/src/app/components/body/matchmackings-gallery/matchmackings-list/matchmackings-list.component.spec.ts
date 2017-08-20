import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmackingsListComponent } from './matchmackings-list.component';

describe('MatchmackingsListComponent', () => {
  let component: MatchmackingsListComponent;
  let fixture: ComponentFixture<MatchmackingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmackingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmackingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
