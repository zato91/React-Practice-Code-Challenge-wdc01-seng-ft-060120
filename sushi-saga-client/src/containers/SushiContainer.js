import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  
  
 

  
  // const more4=()=>{
  // return this.setState({ indexSushi: props.indexSushi += 4})
  // }

  
  return (
    <Fragment>
      <div className="belt">
        {
          
         props.sushis.slice(props.indexSushi, props.indexSushi +4).map(sushi =>
          <Sushi  
          sushi={sushi} 
          key={sushi.id} 
          moveSushi={props.moveSushi}/>)
        }
        <MoreButton 
        more4 ={props.more4}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer