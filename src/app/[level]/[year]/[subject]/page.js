import Link from 'next/link';

export default function Page({params}) {
  const {level, year, subject} = params 

    return (
     <div className="lg:px-20 p-2 flex flex-col items-center">
      <div>
        <h1 className="font-bold text-xl text-center p-4">{subject}</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        tests, exams goes here
    </div>
     </div>
    )
  }

  export async function generateStaticParams() {
    const subjects = ['Math', 'Physic']
   
    return subjects.map((subject) => ({
      subject: subject
    }))
  }