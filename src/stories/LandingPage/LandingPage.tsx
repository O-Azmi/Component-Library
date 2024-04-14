import styled, {css} from 'styled-components';
import type { LandingPageProps } from "./LandingPage.types.ts";
import Navigation from "../Navigation/Navigation.tsx"
import HeroImage from "../HeroImage/HeroImage.tsx"
import LandingBox from "../LandingBoxes/Landing.tsx"

const StyledHeader = styled.header<{disabled?: boolean}>`
    position: relative;
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
`


export default function LandingPage({ disabled }: LandingPageProps) {
    return (
    <StyledHeader disabled={disabled} data-testid="myLandingPage">
        <Navigation/>
        <HeroImage alt={'Hero Image'} width={''} src={'../Images/proba.jpg'} height={''}/>
        <LandingBox />
    </StyledHeader>
    );
}
