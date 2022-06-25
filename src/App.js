import "./styles/styles.css";
import WeatherSearch from "./components/weatherSearch";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  return (<>
    <div className="App container weather-app">
      <div className="weather-body mt-3">
        <WeatherSearch defaultCity={"London"} />
        
      </div>
    </div><div class="mx-auto">
          <p class="text-center open-source">
            This is an open source project by{" "}
            <a href="https://github.com/emmasarge/reactjs-weather-app" target="_blank">
              Emma Sargeant
            </a>
          </p>
        </div></>
  );
}
