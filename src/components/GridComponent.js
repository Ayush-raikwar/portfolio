import styled from "styled-components";

export const GridComponent = ({ data }) => {
    return (
        <Grid>
            {data?.map((item,index) => (
                <Card key={index}>
                    {item.icon}
                    <SkillName>{item.name}</SkillName>
                </Card>
            ))}
        </Grid>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 800px;
  padding: 20px;

  @media (max-width: 740px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-size: .8rem;
  font-weight: 600;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #b66dff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;