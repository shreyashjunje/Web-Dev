import React from 'react'

function Filter({filterData}) {
  return (
    <div>
        <div>
            {filterData.map((data)=>{
                
                    <button key={data.id}>{data.title}</button>
                
            })}
        </div>
    </div>
  )
}

export default Filter;