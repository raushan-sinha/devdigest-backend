import { techNewsData } from "../services/techNews.services.js"

export const getTechNewsData = async (req, res) => {
    try {
        const response = await techNewsData();

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            'message': 'Failed to fetch Data'
        })
    }
}