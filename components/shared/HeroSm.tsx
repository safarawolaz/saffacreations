
type heroSmprops = {
    header: string,
    subHeader: string
}
const HeroSm = ({header, subHeader}: heroSmprops ) => {
  return (
    <section className='min-h-[70vh] px-4 lg:px-10 bg-herosm bg-cover bg-fixed bg-top flex flex-col items-center justify-center'>
        <h1 className="text-6xl font-medium text-[#cfcece] tracking-wider">
            {header}
        </h1>
        <p className="text-lg font-semibold text-[#cfcece] mt-4">{subHeader}</p>
    </section>
  )
}

export default HeroSm