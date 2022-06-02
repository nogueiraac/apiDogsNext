import React, { useState } from 'react'
import {
  Card,
  Button,
  Reveal,
  Image,
  Header,
  List,
  Icon,
} from 'semantic-ui-react'

export default function CardDog(props) {
  return (
    <>
      <Reveal animated="move up">
        <Reveal.Content visible>
          <Card>
            <Image
              style={{ width: 'auto', height: 200 }}
              src={props.dog.image.url}
              alt="Dogs image"
            />
            <Card.Content>
              <Card.Header>{props.dog.name}</Card.Header>
              <Card.Meta>
                <span className="date">{props.dog.life_span}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Reveal.Content>
        <Reveal.Content hidden>
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
        </Reveal.Content>
      </Reveal>
      {/* <ModalDog dog={props.dog} trigger={<button> teste </button>} /> */}
    </>
  )
}
