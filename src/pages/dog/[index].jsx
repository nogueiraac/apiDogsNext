import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Grid,
  Image,
  List,
  Divider,
  Segment,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'
export default function Dog() {
  const { asPath } = useRouter()
  const [dog, setDog] = useState({})
  const [dogImage, setDogImage] = useState(null)

  useEffect(() => {
    const url = asPath.split('/')
    const idImageDog = url[2]

    async function getImage(image_id) {
      let response = await fetch(
        `https://api.thedogapi.com/v1/images/${image_id}`
      )
      let data = await response.json()

      setDogImage(data.url)
      console.log('data.breeds')
      setDog(data?.breeds[0])
    }

    console.log('idImageDog', idImageDog)
    getImage(idImageDog)
  }, [asPath])

  return (
    <Segment>
      <Grid columns={2} relaxed="very" padded="vertically">
        <Grid.Row verticalAlign="middle" centered={true}>
          <Grid.Column>
            <Image src={dogImage} alt={`A image of ${dog.name}`} />
          </Grid.Column>
          <Grid.Column>
            <Container text>
              <Header as="h2">{dog.name}</Header>
              <List>
                <List.Item>
                  <Icon name="heartbeat" />
                  {dog.life_span}
                </List.Item>
                <List.Item>
                  <Icon name="paw" />
                  {dog.bred_for}
                </List.Item>
                <List.Item>
                  <Icon name="map pin" />
                  {dog.origin}
                </List.Item>
                <List.Item>
                  <Icon name="info circle" />
                  {dog.temperament}
                </List.Item>
              </List>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider vertical>Dogs</Divider>
    </Segment>
  )
}
