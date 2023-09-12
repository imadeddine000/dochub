import Link from 'next/link';

export default function Page({params}) {
  const {level, year} = params 

    return (
     <div className="lg:px-20 p-2 flex flex-col items-center">
      <div>
        <h1 className="font-bold text-xl text-center p-4">{year}</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        subjects goes here
        <Link href={`/${level}/${year}/math`}>Math</Link>
        <Link href={`/${level}/${year}/Physic`}>Physic</Link>
    </div>
     </div>
    )
  }

  export async function generateStaticParams() {
    const years = ['1ere', '2eme', '3eme', '4eme']
   
    return years.map((year) => ({
      year: year
    }))
  }