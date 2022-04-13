import React, { Component } from 'react'
import Glasses from './Glasses'
import Model from './Model'
import "./animation.css"
export default class BTThuKinh extends Component {

    arrGlasses  = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    renderGlasses = () =>{
        return this.arrGlasses.map((product,key) =>{
            return <Glasses key={key} product={product} changeGlasses ={this.changeGlasses}/>
        })
    }


    state = {
        glasses :  {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    changeGlasses = (newGlasses) => {
        this.setState({
            glasses: newGlasses,
        })
    }

  render() {
      const keyFrame = `@keyframes animationGlasses${Date.now()} {
        from{
            width: 0;
            transform: rotate(45deg);
            opacity: 0;
        }
        to{
            width: 150px;
            transform: rotate(0deg);
            opacity: 0.7;
        }
    }`
    const styleGlasses = {
        top:  '75px',
        width : '150px',
        right: '70px',
        opacity: '0.7',
        transform: 'rotate(0deg)',
        animation: `animationGlasses${Date.now()} 1s`

    }
    const glassesDetail = {
        width: '250px',
        top: '200px',
        left: '270px',
        paddingLeft: '15px',
        backgroundColor: 'rgba(255, 127, 0, 0.5)',
        textAlign: 'left',
        height: '105px',
    }
    return (
      <div style={{backgroundImage: "url(./glassesImage/background.jpg)", minHeight: '2000px', backgroundSize: "2000px"}}>
          <style>
              {keyFrame}
          </style>
          <div style={{backgroundColor: "rgba(0,0,0,0.8)", minHeight:"2000px"}} className="w-100">

                <h3 className="text-center text-white p-4" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>TRY GLASSES 
                 APP ONLINE</h3>


                <div className="container">
                    <Model keyFrame={keyFrame} styleGlasses={styleGlasses} glassesDetail={glassesDetail} glasses={this.state.glasses} />
                </div>
                <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
                                    {this.renderGlasses()}
                </div>
                
            </div>
        </div>
    )
  }
}
