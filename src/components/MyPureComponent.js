import React, { PureComponent } from 'react'

class MyPureComponent extends PureComponent {
  render() {
    console.log('purecomponent')
    return (
      <div>
        PureComponent {this.props.name}
      </div>
    )
  }
}
export default MyPureComponent;
