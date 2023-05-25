import Image from 'next/image';
import { useContext } from 'react';
import { AnotadorContext } from '@/context/AppContext';

export  function FosforoComponentNos(){

    const {pointsNos} = useContext(AnotadorContext);


    return(
        <div>
            <Image
            src={`/fosforos/fosforos-${pointsNos}.png`}
            width={120}
            height={120}
            alt="fosforo"
            />
        </div>
    )
}

