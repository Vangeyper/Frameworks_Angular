import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteComponent } from './mi-componente.component';

describe('MiComponenteComponent', () => {
  let component: MiComponenteComponent;
  let fixture: ComponentFixture<MiComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponenteComponent]
    });
    fixture = TestBed.createComponent(MiComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
