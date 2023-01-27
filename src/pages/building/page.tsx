import Image from 'next/image';
import profilePicture from '../../../public/en-construction.gif';

export default function Bulding() {
    return <>
      <Image 
          src={profilePicture}
          alt="Bulding gif"
      />
    </>
  }