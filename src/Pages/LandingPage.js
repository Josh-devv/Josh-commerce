"use client"
import Image from "next/image"
import react from "react"
import Home from "@/Components/Home"
import b3 from "@/Assets/line.png"
import { imgCaro } from "@/Components/imgCaro"
import { data2 } from "@/Components/imgCaro"
function LandingPage() {
  return (
    
    <main className="bg-red-50">
    <Home />
    <section>
      <div className="flex justify-evenly m-10 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1  ">
       {
        data2.map((book)=>(
          <div className="py-10 flex flex-col items-center gap-2 " key={book.id} id={`book${book.id}`} >
            <p >{book.image}</p>
            <h1 className="text-[20px] text-slate max-lg:text-[17px] " style={{fontFamily: 'ptserifr'}}>{book.head}</h1>
            <p className="text-center text-[14px] w-9/12 text-slate-500"  style={{fontFamily: 'ptserifr'}}>{book.title}</p>
          </div>
        ))
       }
      </div>
    </section>

    <section className="h-screen"> 
       <div>
        <div>
          <span><img src={b3} /></span>
          <p>NEW ARRIVALS</p>
          <span></span>
        </div>
       </div>
    </section>
    </main>
  )
}

export default LandingPage