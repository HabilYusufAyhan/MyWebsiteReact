const fetchGitHubRepos = async ({ url }) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
};
export default fetchGitHubRepos;
