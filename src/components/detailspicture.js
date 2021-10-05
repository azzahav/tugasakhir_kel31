import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class GambarDetail extends Component {
    state = {
        viewproduct : "Erigo T-Shirt Have Sun Navy"
    }
    
    ubahviewproduct = () => {
        this.setState((state) => {
            if (state.viewproduct === "Erigo T-Shirt Have Sun Navy"){
                return {viewproduct : "S, L, XL, XXL"}
            } else {
                return {viewproduct : "Erigo T-Shirt Have Sun Navy"}
            }
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan detail pictures?')
        }

    render() {
        return (
            <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
                <Row justify="center">
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779610/bahan/erigo_cwgcvx.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/1_pos1x8.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/4_p9t9v7.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/3_c7o7uq.jpg"/>
                    </Col>
                </Row>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahviewproduct}> Lihat Ukuran !</a>
                    <p>{this.state.viewproduct}</p>
                </div>
            </Card>
        );
    }
}

export default GambarDetail;