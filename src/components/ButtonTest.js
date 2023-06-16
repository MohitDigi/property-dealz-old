import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  color: red;
  width: 400px;
`
const StyledHeading = styled.h2`
  color: blue;
`


const ButtonTest = () => {
    return (
        <>
            <StyledHeading>Test</StyledHeading>
            <StyledButton>
                This is going to be a button with red text and pixel width 400!
            </StyledButton>
        </>
    )
}

export default ButtonTest