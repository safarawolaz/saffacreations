const roll = [
  {
    id: 1,
    desc: 'life time support'
  },
  {
    id: 2,
    desc: 'high quality & innovative solutions'
  },
  {
    id: 3,
    desc: 'robust software solutions'
  },
  {
    id: 4,
    desc: 'latest tools & technologies'
  },
  {
    id: 5,
    desc: 'user-centric solutions'
  },
  {
    id: 6,
    desc: 'enhanced user engagement'
  },
  {
    id: 7,
    desc: 'enhanced customer experience'
  },
  {
    id: 8,
    desc: 'AI integration to optimize production'
  },
  {
    id: 9,
    desc: 'enhanced customer engagement'
  },
  {
    id: 10,
    desc: 'innovative software products'
  },
]

const Ribbon = () => {
  return (
    <section className='px-4 lg:px-10 bg-[#000000] whitespace-nowrap overflow-hidden '>
      <div className="animate-roll py-6 w-full flex gap-8 items-center ">
          {
            roll.map(text => <div key={text.id}>
              <div className="text-xl text-[#cfcece] font-bold uppercase tracking-wider whitespace-nowrap">
                *{text.desc}
              </div>
            </div>)
          }
      </div>
       
        
    </section>
  )
}

export default Ribbon