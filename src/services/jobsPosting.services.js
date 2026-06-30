import axios from "axios"
import dotenv from 'dotenv'

dotenv.config();

export const fetchJobApi = async () => {
    try {
        const apiResponse = await axios.get(`${process.env.JOBS_API_URL}`);

        return apiResponse.data.jobs.map((job, idx) => ({
            id: idx + 1,
            url: job.url,
            title: job.title,
            company_name: job.company_name,
            category: job.category,
            job_type: job.job_type,
            candidate_required_location: job.candidate_required_location,
            salary: job.salary        
        }))
    } catch (error) {
        console.error(
            "Job Posting API Error: ",
            error.response?.data || error.message
        );

        throw error;
    }
}