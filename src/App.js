import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Header/Cards";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <div className="App">
      <Header content_title="Animals" font_color="blue" />
      {/* <header className="App-header"> */}
      <Cards />
      {/* </header> */}
      <Footer
        footer_font_color="orange"
        footer_font_size="md"
        footer_desc1="Animals are a wonderful part of our lives"
        footer_desc2="Taking care of animals is very important"
      >
        <p>Animals need food, water, shelter, and love, just like us.</p>
      </Footer>
    </div>
  );
}

export default App;
