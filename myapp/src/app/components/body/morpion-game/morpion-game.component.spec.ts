import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorpionGameComponent } from './morpion-game.component';

describe('MorpionGameComponent', () => {
  let component: MorpionGameComponent;
  let fixture: ComponentFixture<MorpionGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorpionGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorpionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
