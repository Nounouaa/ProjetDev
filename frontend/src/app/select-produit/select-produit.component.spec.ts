import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProduitComponent } from './select-produit.component';

describe('SelectProduitComponent', () => {
  let component: SelectProduitComponent;
  let fixture: ComponentFixture<SelectProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
