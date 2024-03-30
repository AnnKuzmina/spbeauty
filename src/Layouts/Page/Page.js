import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany';
import styled from 'styled-components';

function Page() {
const AboutCompanyContainer = styled.div`
 padding 72px; 
 `;

  return (
    <div className='flex-grow-1'>
      <Header/>
      <AboutCompanyContainer className='container'> 
      <AboutCompany/>  {/* Страница выбирается нажатием на сайдбаре. Сейчас это только AboutCOmpany. */}
      </AboutCompanyContainer> 
      </div>
  );
}

export default Page;