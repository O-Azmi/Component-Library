import styled, { css } from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img<{ disabled?: boolean}>`

    ${props =>
    props.disabled &&
    css`
    filter: grayscale(100%);
    cursor: not-allowed;
    `};
`

export default function Image({ height, src, alt, disabled, width }: HeroImageProps) {
  return (
    <>
      <StyledHeroImage height={height} src={src} alt={alt} width={width}  disabled={disabled}/>
    </>
  );
};
