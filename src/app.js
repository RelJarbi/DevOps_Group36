export class BerlinClock {
    hourOrMinuteLamp(time) {
        let res;
        if (this.isAMultipleOfminuteAndRemainder(time, 1)) {
          result = "premiere ampoule allumé";
        }
        return res;
      }

      minuteForFive(minute) {
        minute = minute - minute % 5;
        if (this.resultForFivsion(minute, 1)) return "premiere ampoule allumé";
        return "TOUT ETEINT";
      }
      


}