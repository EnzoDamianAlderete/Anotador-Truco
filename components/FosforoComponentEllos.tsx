import Image from 'next/image';
import { useContext } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentEllos(){

    const {pointsEllos} = useContext(AnotadorContext);


    return(
        <div>
            <Image
            src={`/fosforos/fosforos-${pointsEllos}.png`}
            width={100}
            height={100}
            alt="fosforo"
            />
        </div>
    )
}

