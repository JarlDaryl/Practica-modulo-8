import { modifyName } from "@/pages/api/pokemonFetch";
import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ChangeNameComponent({pokemonId}) {

    const [name, setName] = useState("");
    const [confirmName, setNameConfirm] = useState("");
    const [error, setError] = useState(false)

    const onChangeNombreHandle = (e) => {
        setName(e.target.value)
    }

    const onChangeNombreHandleConfirm = (e) => {
        setNameConfirm(e.target.value)
    }


    const changeName = () => {
        if( name === confirmName) {
            modifyName(pokemonId, name)
            setError(false)
        }else{
            setError(true)
        }
      }

  return (
    <div>
        <h2>Change Name Component</h2>
        <div>
            <label>Nuevo nombre</label>
            <input type='text' value={name} onChange={onChangeNombreHandle} />
        </div>
        <div>
            <label>Confirma el nuevo nombre</label>
            <input type='text' value={confirmName} onChange={onChangeNombreHandleConfirm} />
        </div>
        <div>
            <button onClick={changeName}>Cambiar nombre</button>
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
