import { Injectable } from "./injectable";

@Injectable()
class TestEngine {
  displacement: number;
  maker: string;

  constructor() {
    this.maker = "Tesla";
    this.displacement = 500;
  }
}

@Injectable()
class TestCar {
  constructor(private ex: TestEngine) {}
}

describe("Injector", () => {
  beforeEach(() => {
      Injector.
  });
  describe("", () => {

  });
  describe('Description', () => {
    
  });
});
