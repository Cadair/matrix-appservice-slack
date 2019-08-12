export class FakeMain {
    public readonly timerFinished: {[eventName: string]: string } = {};

    public startTimer(eventName: string) {
        this.timerFinished[eventName] = "notfinished";
        return (reason: {outcome: string}) => {
            this.timerFinished[eventName] = reason.outcome;
        };
    }
}
