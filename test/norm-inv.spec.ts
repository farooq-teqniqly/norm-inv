import * as chai from "chai";
import "mocha";

import { NormInv } from "../src/norm-inv";

const expect = chai.expect;

describe("NormalInverse tests", () => {
  it ("calculates the normal inverse", () => {
    const result = NormInv.calculate(109.7, 15);

    expect(result).to.be.above(0);
  });
});
