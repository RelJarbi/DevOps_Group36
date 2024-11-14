import { BerlinClock } from "../src/app.js";

let berlinClock = new BerlinClock();
it("doit retourner la première ampoule allumée lorsque les minutes sont égales à 1", function () {
    let result = berlinClock.hourOrMinuteLamp(1);
    expect(result).toBe("premiere ampoule allumé");
  });
  