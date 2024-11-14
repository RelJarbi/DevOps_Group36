export class BerlinClock {
    hourOrMinuteLamp(time) {
        let res;
        if (this.isAMultipleOfminuteAndRemainder(time, 1)) {
          result = "premiere ampoule allumé";
        }
        if (this.isAMultipleOfminuteAndRemainder(time, 2)) {
            result = "premiere et deuxieme ampoule allume";
          }
          if (this.isAMultipleOfminuteAndRemainder(time, 3)) {
            result = "premiere, deuxieme et troisieme ampoule allume";
          }

          if (this.isAMultipleOfminuteAndRemainder(time, 4)) {
            result = "premiere, deuxieme, troisieme et quatrieme ampoule allume";
          }

          if (this.isAMultipleOfminuteAndRemainder(time, 0)) {
            result = "toutes les lumiere de la premiere ligne sont eteinte";
          }
        
        return res;
      }
      
      minuteForFive(min) {
        if (min > 60) {
            min = min - 60;
        }
        min = min - min%5
        if (this.resultForFivsion(min, 1)) return "premiere ampoule allumé";
        if (this.resultForFivsion(min, 2)) return "allumé jusque deux";
        if (this.resultForFivsion(min, 3)) return "allumé jusque 3, en rouge";
        if (this.resultForFivsion(min, 4)) return "allumé jusque 4";
        if (this.resultForFivsion(min, 5)) return "allumé jusque 5";
        if (this.resultForFivsion(min, 6)) return "allumé jusque 6, en rouge";
        if (this.resultForFivsion(min, 7)) return "allumé jusque 7";
        if (this.resultForFivsion(min, 8)) return "allumé jusque 8";
        if (this.resultForFivsion(min, 9)) return "allumé jusque 9, en rouge";
        if (this.resultForFivsion(min, 10)) return "allumé jusque 10";
        if (this.resultForFivsion(min, 11)) return "allumé jusque 11";
        if (this.resultForFivsion(min, 12)) return "TOUT ETEINT";
      }
      
      


}