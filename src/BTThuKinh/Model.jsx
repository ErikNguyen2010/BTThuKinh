import React, { Component } from 'react'
import "./animation.css"

export default class Model extends Component {
  render() {
      let{id,price,name,url,desc} = this.props.glasses
    return (
      <div>
          <div className="row mt-5 text-center">
                        <div className="col-6">
                            <div className="position-relative">
                                <img className='position-absolute' src="./glassesImage/model.jpg" alt="..." style={{width: "250px"}} />
                                <img  style={this.props.styleGlasses} className=' position-absolute ' src={url} alt="..." />
                                <div style={this.props.glassesDetail} className="position-relative">
                                    <span className='font-weight-bold' style={{color: 'rgb(171, 130, 255)',fontSize: '17px'}}>{name}</span>
                                    <br/>
                                    <span style={{
                                            fontSize: '14px',
                                            paddingRight:'5px',
                                            fontWeight:'400',
                                    }} >{desc}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="./glassesImage/model.jpg" alt="..." style={{width: "250px"}} />
                        </div>
                    </div>
      </div>
    )
  }
}
