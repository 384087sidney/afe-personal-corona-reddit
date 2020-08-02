import React from 'react';
import './CoronaBR.css';
import * as coronaBRHotnews from '../Utilities/Reddit.js';
 
function CoronaBR() {

  var coronaBR = coronaBRHotnews.getCoronaBR(); 
  let rows = []
 
  for(let i=0; i< coronaBR.length; i++){
    rows.push(<li className="coronaall-list__item"><a href={coronaBR[i].data.url}>{coronaBR[i].data.title}</a></li>)
  }

  return (
    <div className="coronaall-div">
      <h1 className="coronaall-div__titulo">Corona BR:</h1>
      <ul className="coronaall-list">
        {rows}
      </ul>
    </div>
  )

}

export default CoronaBR;
