import React from 'react'
import './selection.css'

const Selection = () => {

  return (
    <div>
        <h1>Подберём<p>шины</p> </h1>
        <div className='main'>
         <select className='manufacturer'>
          <option>Производитель</option>
         </select>

         <select className='model'>
          <option>Модель</option>
         </select>

         <select className='generation'>
          <option>Поколение</option>
         </select>

         <select className='modification'>
          <option>Модификация</option>
         </select>

         <select className='body'>
          <option>Кузов</option>
         </select>

        </div>

       <div className='btn'>
             <button className='btntwo'>Подобрать</button>
       </div>

    </div>
  )
}

export default Selection