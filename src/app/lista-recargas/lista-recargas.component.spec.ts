import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecargasComponent } from './lista-recargas.component';

describe('ListaRecargasComponent', () => {
  let component: ListaRecargasComponent;
  let fixture: ComponentFixture<ListaRecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaRecargasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
