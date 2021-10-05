import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class product extends Component {
    state = {
        angka:0
    }
    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }
    shouldComponentUpdate(_,nextState) {
        if (this.state.angka !== nextState.angka && typeof nextState.angka === "number") {
            if (nextState.angka >5){
                alert(`HHAABBISS`)
                return false
            }
            return window.confirm('Anda yakin ingin menambahkan Erigo ke Cart?')
        }
        return false
    }
    componentDidUpdate() {
        alert(`Erigo anda berhasil ditambahkan ke Cart`)
    }

    render() {
        return (
        <div style={{textAlign:'center', display: 'inlineblock'}}>
            <Card hoverable style={{display: 'inline-block', width:400, margin:'30px', boxShadow:'0px 1px 1px'}}
            cover={<img alt="gambar1" height="500px" src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1632331085/bahan/4_ww2erc.jpg" />}>
                <Meta title="Erigo Jaket" description="Rp. 150.000" />
                <div>
                    <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                        Add to Cart
                    </Button>
                </div>
                <Text>Total cart : {this.state.angka}</Text>
            </Card>
        </div>
        );
    }
}
export default product;