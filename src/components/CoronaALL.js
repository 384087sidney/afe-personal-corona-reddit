import React from 'react';
import './CoronaALL.css';
import * as coronaBRHotnews from '../Utilities/Reddit.js';
 
function CoronaALL() {

  var CoronaALL = coronaBRHotnews.getCoronaALL(); 
  let rows = []
 
  for(let i=0; i< CoronaALL.length; i++){
    rows.push(<li className="coronabr-list__item"><a href={CoronaALL[i].data.url}>{CoronaALL[i].data.title}</a></li>)
  }

  return (
    <div className="coronabr-div">
      <h1 className="coronabr-div__titulo">Top new global:</h1>
      <ul className="coronabr-list">
        {rows}
      </ul>
    </div>
  )

}

export default CoronaALL;
