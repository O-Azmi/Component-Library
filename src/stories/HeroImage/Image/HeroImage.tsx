import styled, { css } from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledImage = styled.img<{ disabled?: boolean}>`

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
      <StyledImage  height={height} src={src} alt={alt} width={width}  disabled={disabled}/>
    </>
  );
};
