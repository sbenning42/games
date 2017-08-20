import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmackingsGalleryComponent } from './matchmackings-gallery.component';

describe('MatchmackingsGalleryComponent', () => {
  let component: MatchmackingsGalleryComponent;
  let fixture: ComponentFixture<MatchmackingsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmackingsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmackingsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
