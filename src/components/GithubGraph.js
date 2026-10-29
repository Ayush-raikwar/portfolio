import React, { useEffect, useRef, useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { fetchGitHubData } from "../api/commonApis";
import styled from "styled-components";
import { styles } from "../utils/commonStyles";
import { GlassTitle } from "./GlassTitle";
import { glassCard } from "../utils/pageStyles";

export const GitHubGraph = () => {
    const [contributions, setContributions] = useState([]);
    const scrollRef = useRef(null);

    // on phones the graph scrolls sideways: start at the most recent weeks
    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollLeft = el.scrollWidth;
    }, [contributions]);

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
            <GlassTitle>My GitHub <TitleHighlight>Contributions</TitleHighlight></GlassTitle>
            <Card>
                <Scroller ref={scrollRef}>
                    <ReactCalendarHeatmap
                        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                        endDate={new Date()}
                        values={contributions}
                        classForValue={(value) => {
                            if (!value) return "color-empty";
                            return `color-github-${Math.min(value.count, 4)}`;
                        }}
                    />
                </Scroller>
                <SwipeHint>Swipe to see the full year</SwipeHint>
            </Card>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 6rem auto 0;
    padding: 0 1rem;
    width: min(960px, 100%);
    box-sizing: border-box;
`

const Card = styled.div`
    ${glassCard}
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem 1.75rem 1.25rem;
    border-radius: 1.25rem;

    .react-calendar-heatmap text {
        font-size: 7px;
        fill: #9ca3af;
    }
    .react-calendar-heatmap rect {
        rx: 2px;
    }

    /* GitHub dark palette */
    .color-empty { fill: rgba(255, 255, 255, 0.06); }
    .color-github-0 { fill: rgba(255, 255, 255, 0.06); }
    .color-github-1 { fill: #0e4429; }
    .color-github-2 { fill: #006d32; }
    .color-github-3 { fill: #26a641; }
    .color-github-4 { fill: #39d353; }

    @media (max-width: 600px) {
        padding: 1rem 0.75rem 0.75rem;
    }
`

const Scroller = styled.div`
    @media (max-width: 768px) {
        overflow-x: auto;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        > svg {
            display: block;
            min-width: 640px;
        }
    }
`

const SwipeHint = styled.p`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin: 0.5rem 0 0;
        font-size: 0.75rem;
        text-align: center;
        color: #9ca3af;
    }
`

const TitleHighlight = styled.span`
  font-weight: 700;
  color: ${styles.colors.theme_default};
`
