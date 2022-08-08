import { TestBed } from '@angular/core/testing';
import { NavComponent } from './header/nav/nav.component';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        NavComponent
      ],
    }).compileComponents();
  });

  it('O componente IndexComponent foi criado', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Existe o title 'website' em IndexComponent`, () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WebSite');
  });
});
