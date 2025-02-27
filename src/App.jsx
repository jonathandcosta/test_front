import './App.css';
import Header from './components/header/Header';
import SearchInput from './components/search/SearchInput';
import Table from './components/table/Table';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <SearchInput />
        <Table />
      </main>
    </>
  );
}

export default App;
