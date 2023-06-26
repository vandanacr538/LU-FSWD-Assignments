import React, { useState } from 'react'

export default function HOC({Comp}) {
    const[login, setLogin]=useState(false);
  return (
    <div>
        <Comp login={login} setLogin={setLogin}/>

    </div>
  )
}
