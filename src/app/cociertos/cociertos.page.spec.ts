import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CociertosPage } from './cociertos.page';
import { IonicModule } from '@ionic/angular';

describe('CociertosPage', () => {
  let component: CociertosPage;
  let fixture: ComponentFixture<CociertosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CociertosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CociertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});