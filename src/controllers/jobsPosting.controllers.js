import { fetchJobApi } from "../services/jobsPosting.services.js"

export const getJobsPosting = async (req, res) => {
    try {
        const response = await fetchJobApi();

        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            message: "Unknown Error"
        })
    } 
}