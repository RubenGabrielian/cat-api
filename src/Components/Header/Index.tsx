import styled from "styled-components";
const StyledHeader = styled.header`
    padding: 15px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 35px;
`


const Header = () => {
    return (
        <StyledHeader>
            <h1>Cats API Task</h1>
        </StyledHeader>
    )
}


export default Header;