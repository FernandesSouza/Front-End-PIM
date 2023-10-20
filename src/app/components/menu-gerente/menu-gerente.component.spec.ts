import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGerenteComponent } from './menu-gerente.component';

describe('MenuGerenteComponent', () => {
  let component: MenuGerenteComponent;
  let fixture: ComponentFixture<MenuGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuGerenteComponent]
    });
    fixture = TestBed.createComponent(MenuGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
