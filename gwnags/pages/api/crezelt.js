import { connectDB } from "../../lib/database";

const fetchHandler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const client = await connectDB;
            const db = client.db("cres");

            const data = await db.collection('credata').find().toArray();
            res.status(200).json(data);
        } catch (error) {
            console.error("Database error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else if (req.method === 'POST') {
        try {
            let date = new Date()
            let formattedDates = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} `;
            const { title, emphasisPhrase, username, content, relationship, selectedNumber } = req.body;


            const client = await connectDB;
            const db = client.db("cres");

            const result = await db.collection('credata').insertOne({ title, emphasisPhrase, username, content, relationship, selectedNumber, formattedDates });

            res.status(201).json({ message: 'Form submitted successfully', id: result.insertedId });
        } catch (error) {
            console.error("Database error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default fetchHandler;
