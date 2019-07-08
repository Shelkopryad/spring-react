import React, { PureComponent } from 'react';

class InputField extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      type: props.type,
      labelText: props.labelText,
      onChange: props.onChange,
    }
  }

  render() {
    return (
      <div className='form-group row'>
        <label htmlFor={ this.state.id } className='col-2'>{ this.state.labelText }</label>
        <div className='col-10'>
          { this.state.type === 'textarea' && <textarea id={ this.state.id } className="form-control" onChange={ this.state.onChange }></textarea> }
          { this.state.type !== 'textarea' && <input id={ this.state.id } type={ this.state.type } className="form-control" onChange={ this.state.onChange } /> }
        </div>
      </div>
    )
  }
}

export default InputField
