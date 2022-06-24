import './styles/styles.css';
import WeatherSearch from './components/weatherSearch';


export default function App() {
  return (
    <div className="App container weather-app">
      <div className="weather-body mt-3">
        <WeatherSearch />
      </div>
    </div>
  );
}
