import Card from "./components/Card/Card"
import CardContainer from "./components/CardContainer/CardContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import Heading from "./components/Header/Header"
import Container from "./components/Container/Container"

function App() {
  return (

    <Container>
      <Heading />
      <SearchBar />
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  )
}

export default App
