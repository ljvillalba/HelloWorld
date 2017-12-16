import React, { Component } from 'react';
import { Button } from 'react-foundation-components/lib/global/button';

class Calculadora extends Component {
    constructor(){
        super();
        this.state = {resultado: 0, x: 0, y: 0};
        
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.dividir = this.dividir.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange(e) {
        this.setState({x: parseInt(e.target.value)})
    }
    handleChange2(e) {
        this.setState({y: parseInt(e.target.value)})
    }
    sumar() {
        var res = parseInt(this.state.x)+parseInt(this.state.y);
        this.setState({resultado: res});
        this.suma(this.state.x, this.state.y);
    }
    suma(x,y){
        var res = parseInt(x)+parseInt(y);
        console.log(res);
    }
    restar() {
        var res = this.state.x-this.state.y;
        this.setState({resultado: res});
        this.resta(this.state.x, this.state.y);
    }
    resta(x,y){
        var res = parseInt(x)-parseInt(y);
        console.log(res);
    }
    multiplicar() {
        var res = this.state.x*this.state.y;
        this.setState({resultado: res});
        this.mult(this.state.x, this.state.y);
    }
    mult(x,y){
        var res = parseInt(x)*parseInt(y);
        console.log(res);
    }
    dividir() {
        var res = this.state.x/this.state.y;
        this.setState({resultado: res});
        this.div(this.state.x, this.state.y);
    }
    div(x,y){
        var res = parseInt(x)/parseInt(y);
        console.log(res);
    }
    render() {
        return (
            <div>
                <div>
                    <label>Primer número:
                        <input type="number" onChange={ this.handleChange } value={this.state.x}/>
                    </label>
                </div>
                <div>
                    <label>Segundo número:
                        <input type="number" onChange={ this.handleChange2 } value={this.state.y}/>
                    </label>
                </div>
                <div>
                    <Button onClick={this.sumar}>Suma</Button>&nbsp;
                    <Button color="success" onClick={this.restar}>Resta</Button>&nbsp;
                    <Button color="warning" onClick={this.multiplicar}>Multiplicación</Button>&nbsp;
                    <Button color="alert" onClick={this.dividir}>División</Button>&nbsp;
                </div>
                    <label>Resultado: {this.state.resultado}</label>
            </div>
        );
    }
}

export default Calculadora;
