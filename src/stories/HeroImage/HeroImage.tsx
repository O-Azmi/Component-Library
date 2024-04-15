import styled, { css } from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledImageContainer = styled.div<{disabled?: boolean}>`
  width: 100%;
  height: 100vh; 
  position: relative; 
  ${props =>
    props.disabled &&
    css`
    filter: grayscale(1);
    cursor: not-allowed;
    `};
`;

const StyledHeroImageWrapper = styled.div`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  position: absolute; 
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)); 
  
`;

const StyledHeroImage = styled.img<{disabled?: boolean}>`
  width: 100%; 
  height: 100%; 
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
        <StyledHeroImageWrapper />
        <StyledHeroImage height={height} width={width} src={src} alt={alt} disabled={disabled} data-testid="myHeroImage"/>
      </StyledImageContainer>
    );
};