import { fetchTechNews } from "../services/techNews.services.js";

export const getTechNews = async (req, res) => {
    try {
        const response = await fetchTechNews();
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:
                error.response?.data?.message[0] ||
                error.message ||
                "Unknown Error"
        });
    }
};