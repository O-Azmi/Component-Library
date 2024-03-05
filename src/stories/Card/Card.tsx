import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';
import Text from "../Text/Text"

const StyledCard = styled.img<{ disabled?: boolean }>`
  border-radius: 15px;
  transition: transform 0.3s ease;

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
      filter: grayscale(100%);
      cursor: not-allowed;
    `};
`;


const Container = styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  text-align: center;
`;
const WrapText = styled.div`
  margin-top: 1.5em;
`;



export default function Card({ src, alt, disabled, height }: CardProps) {
  return (
    <Container>
      <StyledCard height={height} src={src} alt={alt}  disabled={disabled} />
      <WrapText>
      <Text label={"E-Commerce Project"} size={''} bold={'bold'} disabled={disabled} />
      </WrapText>
    </Container>
  );
}