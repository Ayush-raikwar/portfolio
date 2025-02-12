export const fetchLastCommit = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Ayush-raikwar/portfolio/commits/main"
    );
    const data = await response.json();
    if (data.commit) {
      const commitDate = new Date(data.commit.committer.date);

      const formattedDate = commitDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return formattedDate;
    }
  } catch (error) {
    console.error("Error fetching commit data:", error);
  }
};

export const fetchGitHubData = async () => {
  const query = `
    query {
      viewer {
        login
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(process.env.REACT_APP_GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_PAT_GRAPH}`,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    
    if (result.errors) {
      console.error("GitHub API Errors:", result.errors);
      return null;
    }

    return result.data.viewer.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
};