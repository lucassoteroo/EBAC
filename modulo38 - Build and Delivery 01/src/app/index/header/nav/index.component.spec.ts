import { TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavComponent
      ],
    }).compileComponents();
  });

  it('O componente NavComponent foi criado', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`navMenu está populado e o primeiro item é 'Dados'`, () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app.navMenu.length).toBe(6)
    expect(app.navMenu[0].itemHome).toContain('Dados')
  })

});
