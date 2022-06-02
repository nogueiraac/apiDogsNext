import { useState } from 'react'
import {
  Modal,
  Button,
  Image,
  Header,
  List,
  Icon,
  Transition,
} from 'semantic-ui-react'
export default function ModalDog(props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.trigger}
    >
      <Modal.Header>Dogs info</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={props.dog.image.url}
          alt="Image example"
          wrapped
        />
        <Modal.Description>
          <Header as="h2">{props.dog.name}</Header>
          <List>
            <List.Item>
              <Icon name="heartbeat" />
              {props.dog.life_span}
            </List.Item>
            <List.Item>
              <Icon name="paw" />
              {props.dog.bred_for}
            </List.Item>
            <List.Item>
              <Icon name="map pin" />
              {props.dog.origin ? props.dog.origin : 'n/a'}
            </List.Item>
            <List.Item>
              <Icon name="info circle" />
              {props.dog.temperament}
            </List.Item>
            <List.Item>
              <Icon name="arrows alternate vertical" />
              {props.dog.height.metric.concat('cm')}
            </List.Item>
            <List.Item>
              <Icon name="weight" />
              {props.dog.weight.metric.concat('kg')}
            </List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
