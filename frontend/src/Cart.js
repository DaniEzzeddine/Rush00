import React from 'react'
import { Link } from 'react-router-dom'
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
import TopHeader from './Header'
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
        photo: "",
        name: "qwe",
        meta: "qweqwe",
        price: 0,
        description: "qweqweq weqweq weqweqweqweq  weqweqw eqweq",

    },
    {
        photo: "",
        name: "qwe",
        meta: "qweqwe",
        price: 0,
        description: "qw eqwe qweq we qweqweqweqwe qweqweqw eqw eq",

    },
    {
        photo: "",
        name: "qwe",
        meta: "qweqwe",
        price: 0,
        description: "qw eqweq weqweqweqw eqweqweqweq weqwe qweq",

    },
    {
        photo: "",
        name: "qwe",
        meta: "qweqwe",
        price: 0,
        description: "qweqw eqw eqw eqweqweqwe qweqwe  qweqweqweq",

    },
]

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart,
            total: 0
        }
    }
    render() {
        return (
            <div>
                <TopHeader />
                <Container text style={{ marginTop: '7em' }}>
                    <List animated verticalAlign='middle'>
                        {
                            this.state.cart.map((prod) => (
                            <List.Item id={prod.id}>
                                <Segment>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                    <List.Content>
                                        <List.Header>{prod.name}</List.Header>
                                        <List.Description>{prod.price}$</List.Description>
                                    </List.Content>
                                    <Button onClick={() => this.props.deleteFromCart(prod.id)}>Delete</Button>
                                </Segment>
                            </List.Item>))}

                    </List>
                    <Button onClick={() => console.log(this.state)}>Show cart</Button>
                </Container>


            </div>
        )
    }
}

export default Cart