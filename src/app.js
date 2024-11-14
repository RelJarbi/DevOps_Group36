export class BerlinClock {
    hourOrMinuteLamp(time) {
        let res;
        if (this.isAMultipleOfminuteAndRemainder(time, 1)) {
          result = "premiere ampoule allumé";
        }
        if (this.isAMultipleOfminuteAndRemainder(time, 2)) {
            result = "premiere et deuxieme ampoule allume";
          }
        
        return res;
      }

      
      


}