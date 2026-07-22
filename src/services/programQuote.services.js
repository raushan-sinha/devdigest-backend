import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const fetchProgrammingQuote = async () => {
    try {
        const apiResponse = await axios.get(`${process.env.PROGRAMMING_QUOTE_API_URL}`);

        return apiResponse.data;
    } catch (error) {
        console.error(error)
    }
}