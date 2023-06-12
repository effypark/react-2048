import { Button, Header } from './components';
import * as S from './styles/main.style';

function App() {
  return (
    <S.Page>
      <Header />
      <Button text="NEW GAME" hover />
    </S.Page>
  );
}

export default App;
