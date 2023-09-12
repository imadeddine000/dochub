import HomePageStage from '@/components/HomePageStage'
 
export const metadata= {
  title: 'DOChub',
  description: 'First website in dz for Education files',
}
 
export default function Home() {
  return (
    <div className="lg:px-20 p-2 flex flex-col items-center">
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        <HomePageStage url={"/primaire"} text={'الابتدائي'} image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' }/>
        <HomePageStage url={"/cem"} text={'المتوسط'}  image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60 '}/>
        <HomePageStage url={"/lycee"} text={'الثانوي'}  image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60 '}/>
    </div>
    <div className='bg-[#213555] p-4 text-center  mt-20 rounded-xl font-bold  text-white'>
      <h1>مدونتنا</h1>
    </div>
    
 </div>  
  )
}
