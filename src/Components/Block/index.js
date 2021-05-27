import React from 'react';

export default function Block({rowValue,rowIndex,handleMove}){
    return(
        <div className="row">
            {rowValue.map((blockValue,i) => (
                <div 
                    className="block"
                    onClick={() => handleMove(blockValue,i,rowValue,rowIndex)}
                >
                    <span>{blockValue}</span>
                </div>
            ))}
        </div>

    )
}