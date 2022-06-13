import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceConsolaComponent } from './price-consola.component';

describe('PriceConsolaComponent', () => {
  let component: PriceConsolaComponent;
  let fixture: ComponentFixture<PriceConsolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceConsolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
