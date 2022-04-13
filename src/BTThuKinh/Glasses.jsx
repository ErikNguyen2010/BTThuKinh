import React, { Component } from 'react'

export default class Glasses extends Component {


  render() {
      let{product} = this.props
    return (
      <div>
          <img onClick={() =>{
                this.props.changeGlasses(product)
            }}  className="ml-2 p-2 border border-width-1" src={product.url} style={{width: "110px", cursor: "pointer"}}></img>
      </div>
    )
  }
}
