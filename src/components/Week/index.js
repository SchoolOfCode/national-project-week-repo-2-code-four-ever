import React from 'react'
import Card from '../Card'

const weekLength = [1,2,3,4,5];

const style ={
    display: "flex",
    marginTop: "25px",
}

const Week = ({weeknumber}) => {
    return (
        <section>
        <div><h2>Week {weeknumber}</h2></div>
        
        <div style={style}>
            {weekLength.map((item)=> {
                return <Card weeknumber={weeknumber} daynumber={item}/>
            })}

            
        </div>
        </section>
    )
}

export default Week