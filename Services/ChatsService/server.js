import "dotenv/config";
import app from "./app.js";
import dbConnect from "./src/dataBase/dbConnect.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
	try {
		await dbConnect();
		app.listen(PORT, () => {
			console.log(`Chat service running at ${PORT}`);
		});
	} catch (error) {
		console.error("Error connecting to the database:", error);
	}
}

startServer();
