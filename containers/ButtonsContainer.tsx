'use client';

export function ButtonsContainer({Add,Remove}){
 
    return(
        <div className="flex flex-col gap-2">
            <button 
            onClick={()=>Add()}
            className="p-2 rounded-full bg-blue-500"
            >+
            </button>
            <button 
            onClick={()=>Remove()}
            className="p-2 rounded-full bg-red-500">
            -
            </button>
        </div>
    )
}