import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';

function Addresses() {

const ButPosition = {
    bottom: '0',
    left: '0'
};

const Address = styled.div`
border-radius: 24px;
border: solid #E2E8F0 1px;
min-width: 453px;
min-height: 420px;
padding: 24px;
`;

    return (
        <Address className='d-flex flex-column justify-content-between'>
        <div className='d-flex flex-column gap-2 mt-4 justify-content-between'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <div style={{marginTop: '16px', marginBottom: '16px'}}>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                </div>
                <div style={{marginTop: '16px', marginBottom: '16px'}}>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
                </div>
                <SecondaryButton style={ButPosition}>Добавить филиал</SecondaryButton>
        </Address>
    );
}

export default Addresses;