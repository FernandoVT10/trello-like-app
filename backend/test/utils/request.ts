import supertest from "supertest";
import app from "@/app";

export const createRequest = () => supertest(app);
