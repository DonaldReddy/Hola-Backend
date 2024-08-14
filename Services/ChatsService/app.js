import express from "express";
import cors from "cors";
import router from "./src/routes/Chat.routes.js";

const app = express();
app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: function (origin, callback) {
			console.log(origin);
			if (!origin || /\.donaldreddy\.xyz$/.test(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
	}),
);

app.use("/api/v1/chat", router);

export default app;
