import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGamesComponent } from './view-games.component';

describe('ViewGamesComponent', () => {
  let component: ViewGamesComponent;
  let fixture: ComponentFixture<ViewGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
