import styled from "styled-components";

const StyledCategory = styled.div`
    padding-bottom: 10px;
    div {
        color:black;
        font-size: 18px;
        text-decoration:none;
        background: #115b74;
        color: white;
        padding: 10px;
        display: inline-block; 
        border-radius: 5px;
    }
`



const CategoryItem = (props: any) => {
    const { item, changeCategory } = props;


    return (
        <StyledCategory>
            <div onClick={() => changeCategory(item.id)}>
                {item.name}
            </div>
        </StyledCategory>
    );
}

export default CategoryItem;