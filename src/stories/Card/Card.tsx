import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.img<{ enabled?: boolean; disabled?: boolean }>`
  border-radius: 15px;
  transition: transform 0.3s ease;

  ${props =>
    props.enabled &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `};

  ${props =>
    props.disabled &&
    css`
      filter: grayscale(100%);
      cursor: not-allowed;
    `};
`;

const Text = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 20.3em;
  height: 5.7em;
  transform: translate(-50%, -50%);
  color: #ffffff;
  background-color: rgba(26, 26, 26, 0.5);
  padding: 5px 10px;
  border-radius: 15px;
  opacity: 0;
  transition: opacity 0.8s ease;
`;
const Container = styled.div`
  position: relative;

  &:hover ${Text} {
    opacity: 1;
  }
`;



export default function Card({ src, alt, disabled, height, text }: CardProps) {
  return (
    <Container>
      <StyledCard height={height} src={src} alt={alt}  disabled={disabled} />
      <Text> {text}</Text>
    </Container>
  );
}