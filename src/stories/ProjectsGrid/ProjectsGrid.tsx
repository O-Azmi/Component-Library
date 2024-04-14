import styled, {css} from 'styled-components';
import type { ProjectsGridProps } from "./ProjectsGrid.types.ts";
import Card from '../Card/Card.tsx';
import Text from '../Text/Text.tsx'

const Container = styled.div<{disabled?: boolean}>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`
const Mini = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  text-align: center;
`;
const WrapText = styled.div`
  padding: 1em 0;
`;

export default function ProjectsGrid({disabled}: ProjectsGridProps) {
    return (
      <Container disabled={disabled} data-testid="MyGridPage">
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Date.jpg'} height={''}/>
      <WrapText>
      <Text label={'Dating Website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Furniture.jpg'} height={''}/>
      <WrapText>
      <Text label={'Furniture Website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Space.jpg'} height={''}/>
      <WrapText>
      <Text label={'Space 3D website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Maps.jpg'} height={''}/>
      <WrapText>
      <Text label={'Maps Website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Keyboard.jpg'} height={''}/>
      <WrapText>
      <Text label={'E-Commerce Website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      <Mini>
      <Card alt={'Couple holding hands'} width={'400px'} src={'Images/Projects/Painting.jpg'} height={''}/>
      <WrapText>
      <Text label={'Paintings Website'} size={''} bold={'bold'} color={''}/>
      </WrapText>
      </Mini>
      </Container>
    );
}
