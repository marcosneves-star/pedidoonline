import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import Logo from "../image/PedidoOnline.svg"

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={Logo} alt="Card image cap" />
            </Card>
        </div>
    );
    } 
}
