import Image from 'next/image'
import mountains from '../public/mountains.jpg'

interface Props{
    image: any
} 
export default function BackgroundImage(props:Props) {
  return (
    <Image
      alt="Chic IT"
      src={props.image}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
      className='bg-image'
    />
  )
}