import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentEllos(){

    const {pointsEllos,esMayorEllos , setEsMayorEllos} = useContext(AnotadorContext);
    
    useEffect(()=>{
        if(pointsEllos > 15){
            setEsMayorEllos(true);
        } else if (pointsEllos <= 15){
            setEsMayorEllos(false);
        }
    },[pointsEllos]);


    return(
        <div className='drop-shadow-md'>
            {pointsEllos ? <div>{esMayorEllos ? <div>
            <Image
            src={`/fosforos/fosforos-15.png`}
            width={60}
            height={60}
            alt="fosforo"
            />
            <Image
            className='pt-2'
            src={`/fosforos/fosforos-${(pointsEllos - 15)}.png`}
            width={60}
            height={60}
            alt="fosforo"
            />
            </div>     : 
            <div>
            <Image
        src={`/fosforos/fosforos-${pointsEllos}.png`}
        width={60}
        height={60}
        alt="fosforo"
        />
        </div>
            } </div>  : ""}
        </div>
    )
}

