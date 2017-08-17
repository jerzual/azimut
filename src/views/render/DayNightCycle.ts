import { DirectionalLight } from "babylonjs";
import * as moment from 'moment';

const HOUR_PER_DAY = 24;
const MIN_PER_HOUR = 60;
const TAU = Math.PI * 2;

export enum Phase {
    night, dawn, day, dusk
}
export class DayNightCycle {
    // input
    timeOfDay: moment.Moment;
    // output angle on 0/2*PI scale
    timeAngle: number;
    // move current angle
    speed: number;
    phase: Phase;
    minutesOfDay:number;
    constructor() {
        this.timeAngle = 0;
        this.phase = Phase.night;
    }
    tick(minutes:number) {
        this.timeOfDay = this.timeOfDay.add(minutes, 'minute');
    }
    update(update:moment.Moment) {
        this.timeOfDay = update;
        // Your moment at midnight
        var mmtMidnight:moment.Moment = moment().clone().startOf('day');

        // Difference in minutes
        this.minutesOfDay = update.diff(mmtMidnight, 'minutes', true);

        this.timeAngle = (this.minutesOfDay / (MIN_PER_HOUR * HOUR_PER_DAY)) * TAU;
        // fois un tours d'horloge
        return this.timeAngle;
    }
    private setTimeAngle(){
        
        // go back 360° if we
        if (this.timeAngle > TAU) {
            this.timeAngle += this.speed;
        }
    }
    private setPhase(){
        
    }
}

export default DayNightCycle;