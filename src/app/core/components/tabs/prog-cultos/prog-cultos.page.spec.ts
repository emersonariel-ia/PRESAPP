import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProgCultos } from './prog-cultos.page';

describe('Tab2Page', () => {
  let component: ProgCultos;
  let fixture: ComponentFixture<ProgCultos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgCultos],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgCultos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
