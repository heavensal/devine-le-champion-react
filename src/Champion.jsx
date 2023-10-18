import { useState, useEffect } from "react";

function Champion({champion, answer}) {

  const [year, setYear] = useState('');
  useEffect(() => {
    if (champion.year === answer.year) {
      setYear('good');
    } else if (champion.year <= answer.year) {
      setYear('upper');
    } else {
      setYear('lower');
    }
  }, [champion.year, answer.year]);


  if (!champion) return null;

  return(
    <section className='champion-card'>

      <div className='square'>
        <img src={champion.image} alt={champion.name} title={champion.name} className='image'/>
      </div>

      <div className={`square year ${year}`}>
        {champion.year}
      </div>

      <div className={`square gender ${champion.gender === answer.gender ? 'good' : 'wrong'}`}>
        {champion.gender}
      </div>

      <div className={`square range ${champion.range === answer.range ? 'good' : 'wrong'}`}>
        {champion.range}
      </div>

      <div className={`square resources ${champion.resources === answer.resources ? 'good' : 'wrong'}`}>
       {champion.resources}
      </div>

      <div className={`square lanes ${champion.lanes === answer.lanes ? 'good' : 'wrong'}`}>
        {champion.lanes}
      </div>

      <div className={`square places${champion.places === answer.places ? 'good' : 'wrong'}`}>
        {champion.places}
      </div>

      <div className={`square specie ${champion.specie === answer.specie ? 'good' : 'wrong'}`}>
        {champion.specie}
      </div>
    </section>
  )
}

export default Champion;
