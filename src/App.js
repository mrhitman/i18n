import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLng = lng => () => i18n.changeLanguage(lng);

  return (
    <div className="App">
      <button onClick={changeLng('en')}>en</button>
      <button onClick={changeLng('de')}>de</button>
      <button onClick={changeLng('ru')}>ru</button>
      <p>
        {t('index.welcome')} from {t('main.country')}
      </p>
    </div >
  );
}

export default App;
