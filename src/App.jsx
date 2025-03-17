import Card from "./components/Card/Card"
import CardContainer from "./components/CardContainer/CardContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import Heading from "./components/Header/Header"
import Container from "./components/Container/Container"

function App() {

const onSearch = (query) => {
  console.log(query)
  // fetch data from the API
  // update the state
  // render the data in the Card component
}




  return (

    <Container>
      <Heading />
      <SearchBar onSearch={onSearch} />
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  )
}

export default App
