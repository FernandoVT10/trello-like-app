import bcrypt from "bcrypt";

import { comparePassword, hashPassword } from "../passwordHasher";

describe("utils/passwordHasher", () => {
  describe("hashPassword function", () => {
    it("should return a valid hash", async () => {
      const password = "1234";
      const hash = await hashPassword(password);

      expect(bcrypt.compare(password, hash)).toBeTruthy();
    });
  });

  describe("comparePassword function", () => {
    it("should return true when the passwords match", async () => {
      const password = "1234";
      const hashedPassword = await bcrypt.hash(password, 10);

      expect(await comparePassword(password, hashedPassword)).toBeTruthy();
    });

    it("should return false when the passwords don't match", async () => {
      const password = "1234";

      expect(await comparePassword(password, "secret")).toBeFalsy();
    });
  });
});
