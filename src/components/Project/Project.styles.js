import styled from "styled-components"
import Button from "../Button/Button"

export const ProjectContainer = styled.div`
  display: flex;
  padding: 10rem 0;
`
export const ProjectTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-size: 4rem;
`

export const ProjectDetails = styled.p`
  color: ${props => props.theme.accent1};
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const ProjectArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
`
export const ProjectCallToAction = styled(Button)`
  align-self: flex-start;
`

export const ButtonContainter = styled.div`
  & > :not(:last-child) {
    margin-right: 1rem;
  }
`
