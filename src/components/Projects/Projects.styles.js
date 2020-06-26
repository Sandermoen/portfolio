import styled from "styled-components"

export const ProjectsSection = styled.section`
  min-height: 60vh;
  background-color: ${props =>
    props.isDark
      ? props.theme.dark.background2
      : props.theme.light.background2};
`

export const ProjectsContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem 0;

  & > div:nth-child(odd) {
    & > :first-child {
      order: 2;
    }

    & > :last-child {
      order: 1;
      & > :first-child {
        transform: rotateY(30deg) rotateX(5deg);
      }
      & > :last-child {
        transform: rotateY(30deg) rotateX(5deg);
        left: 0;
      }
    }
  }
`
