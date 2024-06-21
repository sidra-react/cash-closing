
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguageOption from './Components/LanguageOption';
import Navbar from './Components/Navbar';
function App() {
  const { t } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
       <Navbar/>
       <LanguageOption onChange={(e) => handleChangeLanguage(e)} />
      <br/>

         <a href='/sign'>{t('LOGIN')}</a>
         <br/>

         <a href='/home'>{t('home')}</a>
         <br/>
         

    </div>
    
  );
}

export default App;
