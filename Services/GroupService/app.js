import express from "express";
import cors from "cors";
import router from "./src/routes/Group.routes.js";

const app = express();

app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: function (origin, callback) {
			if (
				!origin ||
				/\.donaldreddy\.xyz$/.test(origin) ||
				(typeof origin === "string" ? origin.includes("localhost") : false)
			) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
	}),
);

app.use("/api/v1/group", router);

export default app;
