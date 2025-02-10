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
