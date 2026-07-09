import { fetchGitHubRepoData } from "../services/githubRepo.services.js"

export const getGitHubRepoData = async (req, res) => {
    try {
        const gitHubRepo = await fetchGitHubRepoData();

        res.status(200).json({
            success: true,
            data: gitHubRepo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'GitHub Repo not found!' || error.message
        });
    }
}