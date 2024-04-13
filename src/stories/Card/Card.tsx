import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.img<{ disabled?: boolean }>`
  border-radius: 15px;
  transition: transform 0.3s ease;
  margin-right: 2em;
  ${props =>
    !props.disabled &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `};

  ${props =>
    props.disabled &&
    css`
      filter: grayscale(1);
      cursor: not-allowed;
    `};
`;


const Container = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  text-align: center;
`;


export default function Card({ src, alt, disabled, height, width }: CardProps) {
  return (
    <Container>
      <StyledCard data-testid ="myCard" height={height} src={src} alt={alt} width={width}  disabled={disabled} />
    </Container>
  );
}