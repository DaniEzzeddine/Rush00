import React from 'react'
import { Link } from 'react-router-dom'
import TopHeader from './Header'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Card,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Select,
  Button
} from 'semantic-ui-react'


const mock_data = [
  {
    id: 1,
    photo: "",
    name: "qwe",
    meta: "qweqwe",
    price: 0,
    description: "qwe qweqweq weqwe qweqweqweqwe qweqweqweq",

  },
  {
    id: 2,
    photo: "",
    name: "qwe",
    meta: "qweqwe",
    price: 0,
    description: "qweqweq weqweq weqweqweqweq  weqweqw eqweq",

  },
  {
    id: 3,
    photo: "",
    name: "qwe",
    meta: "qweqwe",
    price: 0,
    description: "qw eqwe qweq we qweqweqweqwe qweqweqw eqw eq",

  },
  {
    id: 4,
    photo: "",
    name: "qwe",
    meta: "qweqwe",
    price: 0,
    description: "qw eqweq weqweqweqw eqweqweqweq weqwe qweq",

  },
  {
    id: 5,
    photo: "",
    name: "qwe",
    meta: "qweqwe",
    price: 0,
    description: "qweqw eqw eqw eqweqweqwe qweqwe  qweqweqweq",

  },
]

class FixedMenuLayout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    cart: this.props.cart
  }
}
  render(){
  return <div>
    <TopHeader />

    <Container text style={{ marginTop: '7em' }}>
      {/* <Segment>
      <Select placeholder="Select type of product" options={mock_data}/>

      </Segment> */}
      <Grid columns={3} stackable>
        {mock_data.map((prod) =>
          <Grid.Column>
            <Card>
              <Image src={prod.photo} />
              <Card.Content>
                <Card.Header>{prod.name}</Card.Header>
                
                <Card.Description>
                  {prod.description}
                </Card.Description>
              </Card.Content>
              <Card.Meta>
                  <Segment>
                  <span className='date'>{prod.meta}</span>
                  </Segment>
                </Card.Meta>
              <Card.Content extra>
                <a>
                  {prod.price}
                </a>
              </Card.Content>
              <Button onClick={() => this.props.addToCart(prod)}>
                Add to Cart     <Icon name="fitted cart plus"></Icon>
              </Button>
            </Card>
          </Grid.Column>
        )}
      </Grid>
        <Button onClick={() => console.log(this.state)}>Show cart</Button>
    </Container>


  </div>
  }
}

export default FixedMenuLayout