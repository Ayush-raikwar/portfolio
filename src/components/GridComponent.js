import styled from "styled-components";

export const GridComponent = ({ data }) => {
    return (
        <Grid>
            {data?.map((item) => (
                <Card key={item.name}>
                    <IconWrap>{item.icon}</IconWrap>
                    <SkillName>{item.name}</SkillName>
                </Card>
            ))}
        </Grid>
    )
}

/* flex-wrap (not grid) so a short last row stays centred */
const Grid = styled.div`
  --cols: 6;
  --gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  width: min(880px, 100%);
  box-sizing: border-box;
  padding: 0 0.5rem;

  > * {
    box-sizing: border-box;
    flex: 0 0 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
  }

  @media (max-width: 760px) {
    --cols: 4;
  }
  @media (max-width: 630px) {
    --cols: 3;
    --gap: 0.75rem;
  }
  @media (max-width: 320px) {
    --cols: 2;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.3s ease;
`;

const SkillName = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
`;

const Card = styled.div`
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.015));
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.1rem 0.75rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(254, 226, 99, 0.45);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
  }
  &:hover ${IconWrap} {
    box-shadow: 0 0 22px rgba(254, 226, 99, 0.18);
  }
`;
