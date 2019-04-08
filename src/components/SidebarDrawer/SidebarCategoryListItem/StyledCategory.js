import styled from 'styled-components';
import { pulseAnimation, pulseAnimation2 } from './SidebarCategoryListItem.css';

const StyledCategory = styled.div`
    ${props => props.className === 'onDropPulse' && `animation:`}
    ${props => props.className === 'onDropPulse' && pulseAnimation(props.color)}
    ${props => props.className === 'onDropPulse' && ` 0.5s linear;`}

    ${props => props.className === 'onDropPulse2' && `animation:`}
    ${props =>
      props.className === 'onDropPulse2' && pulseAnimation2(props.color)}
    ${props => props.className === 'onDropPulse2' && ` 0.5s linear;`}
`;

export default StyledCategory;
