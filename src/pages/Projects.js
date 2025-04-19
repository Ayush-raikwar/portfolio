import React from 'react'
import styled, { keyframes } from 'styled-components';
import { styles } from '../utils/commonStyles';
import { constants } from '../utils/constants';
import PersonalProjImg from '../assets/images/personal.png';

export default function Projects() {

  return (
    <Container>
    <PageContainer>
      <Title>My Recent Works</Title>
      <Subtitle>Here are a few projects I’ve worked on recently.</Subtitle>
      <ProjectsGrid>
        {constants.projects.map((project, index) => (
          <ProjectCard key={index}>
            <ImgContainer>
              <ProjectImage src={project.imgUrl} />
              {project?.personal&&<PersonalTag src={PersonalProjImg} />}
            </ImgContainer>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ButtonGroup>
                {project?.github&&<Button href={project.github} target="_blank">GitHub</Button>}
                {project?.demo&&<Button href={project.demo} target="_blank">Demo</Button>}
              </ButtonGroup>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
    </Container>
  )
}


const Container = styled.div`
    color: ${styles.colors.white};
    background-image: url(${constants.images.bg_image});  
    background-size: cover;  
    background-position: center;  
    background-repeat: repeat;
    min-height: 100vh;
    * {
        margin: 0 !important;
    }

    /* temp */
    display: flex;
    flex-direction: column;
    gap:2rem;
    justify-content: center;
    align-items: center;
`
const Heading = styled.h1`
    
`
const Gif = styled.img`

`
const PageContainer = styled.div`
  width: 70%;
  color: #fff;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 6% !important;

    @media (max-width: 550px) {
      width: auto;
    }

`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem !important;
  
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #b3b3b3;
  margin-bottom: 3rem !important;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const ProjectCard = styled.div`
  background-color: #343a40;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: justify;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(255, 217, 0, 0.5);
  }
`;

const ImgContainer = styled.div`
  background-color: rgba(255,255,255,.5);
  display: flex;
  justify-content: center;
  overflow: hidden !important;
  position: relative;
`

const ProjectImage = styled.img`
  height: 180px;
  transform: scale(1.5);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem !important;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #b3b3b3;
  margin-bottom: 1.5rem !important;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.a`
  background-color: #4a90e2;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #367bbd;
  }
`;

const PersonalTag = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  /* border-radius: 50%; */
  background-color: rgba(255,255,255,.5);
  z-index: 1;
`