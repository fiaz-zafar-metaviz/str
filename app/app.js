'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {

  const [data,setData] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData(){

    const { data } = await supabase
      .from('users')
      .select('*')

    setData(data || [])
  }

  return (

    <div style={{padding:'40px'}}>

      <h1>Supabase Test</h1>

      {data.map((item)=>(
        <p key={item.id}>{item.text}</p>
      ))}

    </div>

  )
}