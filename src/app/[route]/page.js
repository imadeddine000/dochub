import HomePageStage from "@/components/HomePageStage";


export default function Page() {
    return (
     <div className="lg:px-20 p-2 flex flex-col items-center">
      <div>
        <h1 className="font-bold text-xl text-center p-4">الابتدائي</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 ">
        <HomePageStage text={'القسم التحظيري'} image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' }/>
        <HomePageStage text={'السنة الاولى'}  image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60 '}/>
        <HomePageStage text={'السنة الثانية'}  image={'https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60 '}/>
    </div>
     </div>
    )
  }
  