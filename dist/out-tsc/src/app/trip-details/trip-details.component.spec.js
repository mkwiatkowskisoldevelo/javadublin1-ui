import { async, TestBed } from '@angular/core/testing';
import { TripDetailsComponent } from './trip-details.component';
describe('TripDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TripDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TripDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trip-details.component.spec.js.map