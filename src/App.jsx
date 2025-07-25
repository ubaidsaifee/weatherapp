import { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import { useWeather } from './context/Weather';


function App() {

  const weather = useWeather();

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentLocationData();
  }, [])

  return (
    <>

      <Container>
        <div>
          <h1>Check Weather</h1>
          <Input />
          <Button onClick={weather.fetchData} value="Search" />
          <Card />
          <Button onClick={weather.fetchCurrentLocationData} value="Refresh" />
        </div>
      </Container>

    </>
  )
}

export default App
