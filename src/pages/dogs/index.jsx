import { useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import CardDog from '../../components/Card'
import { Container, Grid, Pagination, Dimmer } from 'semantic-ui-react'
import axios from 'axios'

export default function Dogs() {
  const [dogs, setDogs] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [apiUrl, setApiUrl] = useState(
    'https://api.thedogapi.com/v1/breeds?limit=12&page=0'
  )

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setDogs(response.data)
    })
  }, [apiUrl])

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage)
    setApiUrl(
      'https://api.thedogapi.com/v1/breeds?limit=12&page=' +
        (pageInfo.activePage - 1).toString()
    )
  }

  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1> API DOGS</h1>
      <Pagination
        activePage={activePage}
        onPageChange={onChange}
        totalPages={5}
        firstItem={null}
        lastItem={null}
        ellipsisItem={null}
        style={{ marginBottom: 20 }}
      />
      <Grid columns={4}>
        {dogs?.map((dog) => {
          return (
            <Grid.Column key={dog.id}>
              <CardDog dog={dog} />
            </Grid.Column>
          )
        })}
      </Grid>
    </Container>
  )
}
