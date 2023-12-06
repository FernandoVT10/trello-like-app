import { createRequest } from "@test/utils/request";
import userModelHelper from "./userModelHelper";

const request = createRequest();

describe("POST /api/users/login", () => {
  it("should return a valid JWT token", async () => {
    const data = {
      username: "root",
      password: "pass",
    };

    await request.post("/api/users").send(data);

    const res = await request.post("/api/users/login").send(data);

    expect(res.body.data.token).not.toBeNull();
  });

  it("should fail when username doesn't exist", async () => {
    const data = {
      username: "not found",
      password: "pass",
    };

    const res = await request.post("/api/users/login").send(data);

    expect(res.body.errors[0].message).toBe("Username doesn't exist");
  });

  it("should fail when password is incorrect", async () => {
    const data = {
      username: "not found",
      password: "pass",
    };

    await userModelHelper.createUser({
      username: data.username,
      password: "secret",
    });

    const res = await request.post("/api/users/login").send(data);

    expect(res.body.errors[0].message).toBe("Password is incorrect");
  });
});
