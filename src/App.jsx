import './App.css';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Title from './components/title/Title';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Title />
        <Table />
      </main>
    </>
  );
}

export default App;
