// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Picture from "./components/Picture";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="row d-flex justify-content-start align-items-center"
          id="row1"
        >
          <Navbar />
          <div>
            <Title />
            <Text />
            <h2 className="button">Awesome!</h2>
          </div>
        </div>

        {/* part2 */}

        <div
          className="row d-flex justify-content-start align-items-center"
          id="row2"
        >
          <div className="col">
            <Picture
              imageSrc="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              imageTitle="Declarative"
              imageDescription="React makes it painless to create interactive UIs."
            ></Picture>
          </div>
          <div className="col">
            <Picture
              imageSrc="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              imageTitle="Components"
              imageDescription="Build encapsulated compoants that manage their state"
            ></Picture>
          </div>
          <div className="col">
            <Picture
              imageSrc="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              imageTitle="Single-Way"
              imageDescription="A set of immutablr values are passed to the components"
            ></Picture>
          </div>
          <div className="col">
            <Picture
              imageSrc="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
              imageTitle="JSX"
              imageDescription="Statically-typed, designed to run on moders browsers"
            ></Picture>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
