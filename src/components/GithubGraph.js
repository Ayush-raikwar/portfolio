import React, { useEffect, useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { fetchGitHubData } from "../api/commonApis";
import styled from "styled-components";
import { styles } from "../utils/commonStyles";

export const GitHubGraph = () => {
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        fetchGitHubData().then((data) => {
            if (data) {
                const days = data.weeks.flatMap((week) => week.contributionDays);
                setContributions(days.map((day) => ({ date: day.date, count: day.contributionCount })));
            }
        });
    }, []);

    return (
        <Container>
            <Title>My Github <TitleHighlight>Contributions</TitleHighlight></Title>
            <ReactCalendarHeatmap
                startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                endDate={new Date()}
                values={contributions}
                classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-github-${Math.min(value.count, 4)}`;
                }}
            />
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
    width: 60%;

    .color-empty { fill: #ebedf0; }  /* Light Gray (No Contribution) */
    .color-github-1 { fill: #9be9a8; } /* Light Green */
    .color-github-2 { fill: #40c463; } /* Medium Green */
    .color-github-3 { fill: #30a14e; } /* Darker Green */
    .color-github-4 { fill: #216e39; } 
`
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
`

const TitleHighlight = styled.span`
  font-weight: 500;
  color: ${styles.colors.theme_default};
`
