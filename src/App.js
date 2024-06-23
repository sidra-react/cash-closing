
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguageOption from './Components/LanguageOption';
import Aboutus from './Pages/Aboutus';
import Navbaroutflow from './Components/Navbaroutflow';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const { t } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
     <Router>
       <LanguageOption onChange={handleChangeLanguage} />
<Aboutus/>

         </Router>

    </div>
    
  );
}

export default App;
