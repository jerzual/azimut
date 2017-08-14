import { DirectionalLight } from "babylonjs";

const HOUR_PER_DAY = 24;
const MIN_PER_HOUR = 60;
const TAU = Math.PI * 2;
enum Phase {
    night, dawn, day, dusk
}
class DayNightCycle {
    timeOfDay: number;
    timeAngle: number;
    speed: number;
    phase: Phase;
    sun: DirectionalLight;
    constructor() {
        this.timeAngle = TAU / 2;
        this.phase = Phase.night;
    }
    tick() {
        // go back 360° if we
        if (this.timeAngle > TAU) {
            this.timeAngle += this.speed;
        }
    }
    get hour(){
        return this.timeAngle / TAU * HOUR_PER_DAY;
    }
    get min(){
        return this.timeAngle / TAU * HOUR_PER_DAY * MIN_PER_HOUR;
    }
}
