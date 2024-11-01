import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import "./App.css";

const siteProps = {
  name: "Shilpa Chauhan",
  title: "Frontend Web Developer",
  email: "chauhanshilpa602@gmail.com",
  gitHub: "chauhanshilpa",
  linkedIn: "chauhan-shilpa",
  leetcode: "chauhanshilpa602",
  hackerrank: "chauhanshilpa602",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
