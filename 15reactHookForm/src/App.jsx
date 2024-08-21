import "./App.css";
import Header from "./components/Header";
import YoutubeForm from "./components/YoutubeForm";

// ++++++++++++ difference between raect form and react hook form +++++++++++++++++++++
// the difference between both is that in traditional react form when we work with control components/ inputfields, every change cause the parent components to re-render, while in react hook form the component does not re-render when making changes in input fields. it follow the incontrol input behavior.

// +++++++++++++++++++++++++++++++++ 1. Handling Forms ++++++++++++++++++++++++++

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <YoutubeForm/>
      </div>
    </>
  );
}
export default App;

// +++++++++++++++++++++++++++++++++ 2. Submitting Forms ++++++++++++++++++++++++++

