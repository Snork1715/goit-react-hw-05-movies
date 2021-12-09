import Navigation from "../Navigation";
import Container from "../Container";
import "./AppBar.css";

export default function AppBar() {
  return (
    <header className="header-app">
      <Container>
        <div className="wrapper">
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
