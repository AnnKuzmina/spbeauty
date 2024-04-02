import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    padding: 8px 16px 8px 16px;
    &:hover {
        opacity: 0.8;
    }
`;

const TitleStyled = styled.div`
    color: #94A3B8;
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
    (<div></div>) : 
    (<TitleStyled className='caption'>{title}</TitleStyled>);
    return (
        <div className='d-flex flex-column gap-2'>
            <div className='caption'>
                {Title}
            </div>
            <Input className='text-rg'defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;