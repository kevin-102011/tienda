import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpFactureComponent } from './imp-facture.component';

describe('ImpFactureComponent', () => {
  let component: ImpFactureComponent;
  let fixture: ComponentFixture<ImpFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
