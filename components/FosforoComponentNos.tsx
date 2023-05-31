import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentNos(){

    const {pointsNos,esMayorNos , setEsMayorNos} = useContext(AnotadorContext);
    
    useEffect(()=>{
        if(pointsNos > 15){
            setEsMayorNos(true);
        } else if (pointsNos <= 15){
            setEsMayorNos(false);
        }
    },[pointsNos]);


    return(
        <div className='drop-shadow-md'>
           {pointsNos ? <div className='flex justify-center'>{esMayorNos ? <div>
            <Image
            src={`/fosforos/fosforos-15.png`}
            width={60}
            height={60}
            alt="fosforo"
            />
            <Image
            className='pt-2'
            src={`/fosforos/fosforos-${(pointsNos - 15)}.png`}
            width={60}
            height={60}
            alt="fosforo"
            />
            </div>     : 
            <div>
            <Image
        src={`/fosforos/fosforos-${pointsNos}.png`}
        width={60}
        height={60}
        alt="fosforo"
        />
        </div>
            } </div>  : ""}
            
        </div>
    )
}

