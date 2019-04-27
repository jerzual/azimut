import { DayNightCycle } from "../DayNightCycle";
import * as moment from 'moment';

describe('DayNightCycle', () => {
    let cycle:DayNightCycle;
    beforeEach(() => {
        cycle = new DayNightCycle();
    });

    test('when midnight', () => {
        cycle.update( moment().hour(0).minute(0) );
        expect( cycle.timeAngle ).toBeCloseTo(0);
    });

    test('when midday', () => {
        cycle.update( moment().hour(12).minute(0) );
        expect( cycle.timeAngle ).toBeCloseTo( Math.PI );
    });

    describe('when dawn or dusk', () => {
        test('when dawn', () => {
            cycle.update( moment().hour(6).minute(0) );
            expect( Math.floor( cycle.minutesOfDay ) ).toBeCloseTo( 6*60, 0);
            expect( cycle.timeAngle ).toBeCloseTo( Math.PI/2, 1 );
        });
        test('when dusk', () => {
            cycle.update( moment().hour(18).minute(0) );
            expect( cycle.timeAngle ).toBeCloseTo( (3*Math.PI)/2, 1 );
        });
    });

    test('tick should increment the given mminutes amount', () => {
        cycle.update(moment().hour(0).minute(0));
        cycle.tick(10);
        expect(cycle.timeOfDay.minute()).toBe(10);
    });

    test('update should change time of day', () => {
        cycle.update(moment().hour(14).minute(42));
        cycle.tick(10);
        expect(Math.floor(cycle.minutesOfDay)).toBeCloseTo(14*60+42,0);
    });

});
