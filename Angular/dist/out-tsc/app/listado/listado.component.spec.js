import { TestBed } from '@angular/core/testing';
import { ListadoComponent } from './listado.component';
describe('listadocomponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListadoComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ListadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
