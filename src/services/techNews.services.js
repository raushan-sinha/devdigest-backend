import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const fetchTechNews = async () => {
    try {
        const apiResponse = await axios.get(`${process.env.TECH_NEWS_URL}`, 
            {
                params: {
                    q: 'technology',
                    lang: 'en',
                    max: 10,
                    apikey: process.env.TECH_NEWS_API_KEY
                }
            }
        )

        console.log(apiResponse.data)

        return apiResponse.data.articles.map((article, idx) => ({
            id: idx + 1,
            title: article.title,
            description: article.description,
            content: article.content,
            url: article.url
        }))
    } catch (error) {
        console.error(
            "GNews Error:",
            error.response?.data || error.message
        );
    
        throw error;
    }
};