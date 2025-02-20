import TranslationsTable from './TranslationsTable';
import CombinedQuestions_Answers from './CombinedQuestions_Answers';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Gherkin Term Translations</h1>
            <TranslationsTable />
            <CombinedQuestions_Answers />
        </div>
    );
}

export default App;