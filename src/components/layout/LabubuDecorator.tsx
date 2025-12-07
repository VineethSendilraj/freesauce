import Image from "next/image"

const LabubuDecorator = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Image
        src="/images/labubu/labubu-6.png"
        alt="Labubu decoration"
        width={50}
        height={50}
        className="drop-shadow-lg opacity-80"
      />
      <Image
        src="/images/labubu/labubu-1.png"
        alt="Labubu decoration"
        width={50}
        height={50}
        className="drop-shadow-lg opacity-80"
      />
    </div>
  )
}

export default LabubuDecorator