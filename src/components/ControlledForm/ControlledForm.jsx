import { useState } from 'react';
import TextField from '../TextField/TextField';


const initialValues = 
  {
    name: 'a',
    phone: 'b',
    address: 'c',
  }


const ControlledForm = ({ submit }) => {
  const [state, setState] = useState(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    submit(state);
    // reset
    setState(initialValues)
  };

  const handleChangeName = e => {
    // вместо отдельных прописаний фун-ций по каждому инпуту. [e.target.name]: сопоставляет то что в name со state
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // const handleChangePhone = (e)=> {
  //   setState({
  //     ...state,
  //     phone: e.target.value,
  //   })
  // }
  // const handleChangeAddress = (e)=> {
  //   setState({
  //     ...state,
  //     address: e.target.value,
  //   })
  // }

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={state.name} onChange={handleChangeName} name="name" />
      <br />
      <TextField value={state.phone} onChange={handleChangeName} name="phone" />
      <br />
      <TextField
        value={state.address}
        onChange={handleChangeName}
        name="address"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
