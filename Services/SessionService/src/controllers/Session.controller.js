import Session from "../models/Session.schema.js";

async function createSession(req, res) {
	try {
		const { userName, refreshToken } = req?.body;
		await Session.deleteMany({ userName });
		const newSession = new Session({ userName, refreshToken });
		await newSession.save();
		res.status(200).send({ status: true });
	} catch (error) {
		res.status(400).send({ status: false, error: error.message });
	}
}

async function getSession(req, res) {
	try {
		const { userName, refreshToken } = req?.query;
		const query = {};
		if (userName) query.userName = userName;
		if (refreshToken) query.refreshToken = refreshToken;
		const session = await Session.findOne(query);
		if (!session) throw new Error("No session for provided username");
		res.status(200).send({ status: true, data: { session } });
	} catch (error) {
		res.status(400).send({ status: false, error: error.message });
	}
}

async function deleteSession(req, res) {
	try {
		const { userName, refreshToken } = req?.body;
		const query = {};
		if (userName) query.userName = userName;
		if (refreshToken) query.refreshToken = refreshToken;
		await Session.deleteMany({ userName });
		res.status(200).send({ status: true });
	} catch (error) {
		res.status(400).send({ status: false, error: error.message });
	}
}

export { createSession, getSession, deleteSession };
