import React, { useState } from 'react';
import { modifyName } from "@/pages/api/pokemonFetch";

export default function ChangeNameComponent({ pokemonId, toggleChangeName }) {
  const [name, setName] = useState("");
  const [confirmName, setNameConfirm] = useState("");
  const [error, setError] = useState(false);

  const onChangeNameHandle = (e) => {
    setName(e.target.value);
  }

  const onChangeNameHandleConfirm = (e) => {
    setNameConfirm(e.target.value);
  }

  const changeName = () => {
    if (name === confirmName) {
      modifyName(pokemonId, name);
      setError(false);
      toggleChangeName(); 
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <h2>Change Name Component</h2>
      <div>
        <label>Nuevo nombre</label>
        <input type='text' value={name} onChange={onChangeNameHandle} />
      </div>
      <div>
        <label>Confirma el nuevo nombre</label>
        <input type='text' value={confirmName} onChange={onChangeNameHandleConfirm} />
      </div>
      <div>
        <button onClick={changeName} className='editar'>Cambiar nombre</button>
      </div>
      <br/>

      {
        error ? 
          <div>
            <span>Error: Los nombres no son iguales</span>
          </div>
        : 
          null
      }
    </div>
  )
}

