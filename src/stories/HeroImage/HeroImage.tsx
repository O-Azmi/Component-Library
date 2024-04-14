import styled, { css } from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100vh; 
`;

const StyledHeroImage = styled.img<{disabled?: boolean}>`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  filter: grayscale(50%);

  ${props =>
    props.disabled &&
    css`
    filter: grayscale(1);
    cursor: not-allowed;
    `};
`;

export default function HeroImage({ height, src, alt, disabled, width }: HeroImageProps) {
    return (
      <StyledImageContainer>
        <StyledHeroImage height={height} src={src} alt={alt} width={width}  disabled={disabled} data-testid="myHeroImage"/>
      </StyledImageContainer>
    );
  };

 