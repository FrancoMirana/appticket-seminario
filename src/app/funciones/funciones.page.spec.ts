import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionesPage } from './funciones.page';
import { IonicModule } from '@ionic/angular';

describe('FuncionesPage', () => {
  let component: FuncionesPage;
  let fixture: ComponentFixture<FuncionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
