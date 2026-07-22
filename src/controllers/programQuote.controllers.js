import { fetchProgrammingQuoteApi } from "../services/programQuote.services.js"

export const getProgrammingQuoteApi = async (req, res) => {
    try {
        const response = await fetchProgrammingQuoteApi();

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Unknown Error' });
    }
}