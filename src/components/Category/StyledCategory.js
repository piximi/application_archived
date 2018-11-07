import styled from 'styled-components';
import { pulseAnimation, pulseAnimation2 } from './Category.css';
import Color from 'color';

const StyledCategory = styled.div`
    &:hover {
        background: ${props =>
          Color(props.color)
            .saturate(0.5)
            .lighten(0.99)
            .string()}};
    };

    ${props => props.className === 'onDropPulse' && `animation:`}
    ${props => props.className === 'onDropPulse' && pulseAnimation(props.color)}
    ${props => props.className === 'onDropPulse' && ` 0.5s linear;`}

    ${props => props.className === 'onDropPulse2' && `animation:`}
    ${props =>
      props.className === 'onDropPulse2' && pulseAnimation2(props.color)}
    ${props => props.className === 'onDropPulse2' && ` 0.5s linear;`}
`;

export default StyledCategory;
