import { fetchTechNews } from "../services/techNews.services.js";

export const getTechNews = async (req, res) => {
    try {
        const response = await fetchTechNews();

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            message: error.response?.data || error.message || "Unknown Error"
        });
    }
}