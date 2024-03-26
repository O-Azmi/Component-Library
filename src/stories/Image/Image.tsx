import styled, { css } from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img<{enabled?: boolean,  disabled?: boolean}>`
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
    filter: grayscale(1);
    cursor: not-allowed;
    `};
`

export default function Image({ enabled, src, alt, disabled, width }: ImageProps) {
  return (
    <>
      <StyledImage enabled={enabled} src={src} alt={alt} width={width}  disabled={disabled} data-testid="myImage"/>
    </>
  );
};
