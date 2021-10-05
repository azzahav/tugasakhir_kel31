import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class detailsproduct extends Component {
    state = {
        lihatbenefit : false
    }
    ubahlihatbenefit = () => {
        this.setState(() => {
            return {lihatbenefit : !this.state.lihatbenefit}
        })
    }
    componentWillUnmount() {
        alert('HIDE DETAILS PRODUCTS?')
    }

    render() {
        return (
        <Card hoverable title=" Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
            <p style={{margin:'2px'}}>T-Shirt Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara Local Brand Indonesia.</p>
                <p style={{margin:'2px'}}>Dibuat dengan bahan cotton yang nyaman untuk menemani harimu dan memiliki print desain yang unik.</p>
                
                <p style={{margin:'2px'}}>Dapatkan long lasting tee dengan warna cantik ini untuk merasa muda selamanya!</p>
                <p style={{margin:'2px'}}>Model Pria: Tinggi 185-186 cm, Berat 75 kg, Menggunakan Ukuran XL</p>
                <p style={{margin:'2px'}}>Bahan: Katun</p>
                <p style={{margin:'2px'}}>S: Lebar Dada: 48 cm - Panjang Baju: 68 cm - Lebar Bahu: 12</p>
                <p style={{margin:'2px'}}>M: Lebar Dada: 50 cm - Panjang Baju: 70 cm - Lebar Bahu: 12.5</p>
                <p style={{margin:'2px'}}>L: Lebar Dada: 52 cm - Panjang Baju: 72 cm - Lebar Bahu: 13</p>
                <p style={{margin:'2px'}}>XL: Lebar Dada: 54 cm - Panjang Baju: 74 cm - Lebar Bahu: 13.5</p>
                <p style={{margin:'2px'}}> XXL: Lebar Dada: 58 cm - Panjang Baju: 76 cm - Lebar Bahu: 15</p>
            <div style={{Align:'center', display: 'inlineblock'}}>
                <a onClick={this.ubahlihatbenefit}>{this.state.lihatbenefit ? 'Minimize' : 'View'} BENEFIT!</a>
                {this.state.lihatbenefit ? <p>30% OFF AT CHECKOUT</p> : ''}
            </div>
        </Card>
        );
    }
}

export default detailsproduct;