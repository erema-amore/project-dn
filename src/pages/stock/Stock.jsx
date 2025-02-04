import React from 'react'
import './Stock.css'

const Stock = () => {
  return (
    <div className="Action">
    <p className="action-taitle">Aktion</p> 
    <div className='urlgap'>
    <div><img className='imgUrl' src="https://cdnn21.img.ria.ru/images/07e6/0b/12/1832568240_0:137:2048:1289_1920x0_80_0_0_daa8ff77876ac3ba95f0c9984d70415c.jpg"/><div className='textAction'>Тормозные колодки <br/>
    со скидкой 10%</div > <button className='diskBtn'>диски</button><button className='diskBtn'>шины</button></div>
    <div><img className='imgUrl' src="https://cdnn21.img.ria.ru/images/07e6/0b/12/1832568240_0:137:2048:1289_1920x0_80_0_0_daa8ff77876ac3ba95f0c9984d70415c.jpg"/><div className='textAction'>Тормозные колодки <br/>
    со скидкой 10%</div></div>
    <div><img className='imgUrl' src="https://cdnn21.img.ria.ru/images/07e6/0b/12/1832568240_0:137:2048:1289_1920x0_80_0_0_daa8ff77876ac3ba95f0c9984d70415c.jpg"/><div className='textAction'>Тормозные колодки <br />
    со скидкой 10%</div></div>
    </div>

    </div>
  );
};

export default Stock;