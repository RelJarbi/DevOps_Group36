import { BerlinClock } from "../src/app.js";

let berlinClock = new BerlinClock();
it("doit retourner la première ampoule allumée lorsque les minutes sont égales à 1", function () {
    let result = berlinClock.hourOrMinuteLamp(1);
    expect(result).toBe("premiere ampoule allumé");
  });

  it("devrait retourner première et deuxième ampoule alluméeslorsque les minutes sont égales à 2.", function () {
    let date = new Date();

    let result = berlinClock.hourOrMinuteLamp(2);

    expect(result).toBe("premiere et deuxieme ampoule allume");
    
    it(" retourner première, deuxième et troisième ampoule allumées lorsque les minutes sont égales à 3", function () {
        let result = berlinClock.hourOrMinuteLamp(3);
    
        expect(result).toBe("premiere, deuxieme et troisieme ampoule allume");
      });

      it("BerlinClock function should return premiere, deuxieme, troisieme et quatrieme ampoule allume when minutes is 4", function () {
        let result = berlinClock.hourOrMinuteLamp(4);
    
        expect(result).toBe(
          "premiere, deuxieme, troisieme et quatrieme ampoule allume"
        );
      });
      it("toutes les lumières de la première ligne sont éteintes lorsque les minutes sont égales à 5", function () {
        let result = berlinClock.hourOrMinuteLamp(5);
    
        expect(result).toBe("toutes les lumiere de la premiere ligne sont eteinte");
      });
      it("berlinClock function should return toutes les lumiere de la premiere ligne sont eteinte when minute is 5", function () {
        let result = berlinClock.hourOrMinuteLamp(60);
    
        expect(result).toBe("toutes les lumiere de la premiere ligne sont eteinte");
      });
      it("berlinClock function should return toutes les lumiere de la premiere ligne sont eteinte when minute is 5", function () {
        let result = berlinClock.minuteForFive(5);
    
        expect(result).toBe("premiere ampoule allumé");
      });
      it("berlinClock function should return toutes les lumiere de la premiere ligne sont eteinte when minute is 5", function () {
        let result = berlinClock.minuteForFive(10);
    
        expect(result).toBe("allumé jusque deux");

  });


});