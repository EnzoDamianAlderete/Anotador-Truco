'use client';

export function ButtonsContainer({Add,Remove}){
 
    return(
        <div className="flex flex-col gap-2">
            <button 
            onClick={()=>Add()}
            className="p-1 rounded-full border-2 m-2"
            >+
            </button>
            <button 
            onClick={()=>Remove()}
            className="p-1 rounded-full border-2 m-2">
            -
            </button>
        </div>
    )
}