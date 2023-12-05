import supertest from "supertest";
import app from "@/app";
import userModelHelper from "./userModelHelper";

import { comparePassword } from "@/utils/passwordHasher";

const request = supertest(app);

describe("POST /api/users", () => {
  it("should create a user and return a success message", async () => {
    const data = {
      username: "testman",
      password: "secret",
    };

    const res = await request
      .post("/api/users")
      .send(data);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.message).toBe("User created successfully");
  });

  it("should create the user with the password hashed", async () => {
    const data = {
      username: "testman",
      password: "secret",
    };

    await request
      .post("/api/users")
      .send(data);
    
    const user = await userModelHelper.findOneUser();

    expect(await comparePassword(data.password, user?.password as string)).toBeTruthy();
  });

  it("should fail with invalid data", async () => {
    const data = {
      username: "",
      password: "",
    };

    const res = await request.post("/api/users").send(data);

    expect(res.body.errors).toHaveLength(2);
  });

  it("should fail when username already exists", async () => {
    const data = {
      username: "testman",
      password: "secret",
    };

    await userModelHelper.createUser(data);

    const res = await request.post("/api/users").send(data);

    expect(
      res.body.errors[0].message
    ).toBe("Username is already taken");
  });
});
