"use client"

import {useState} from "react"

type Genre = {
    name: string,
    image: string
}

const genres: Genre[] = [
    {
        name: "Women",
        image: "https://m.media-amazon.com/images/I/71FzCAkkdIL._AC_SY879_.jpg"
    },
    {
        name: "Men",
        image: "https://m.media-amazon.com/images/I/91k73BvHfsL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
    }
    
]

export default function TabBar() {
    const [thisGenre,  setThisGenre] = useState<Genre>(genres[0])
    return (
        <>
        <div id="dynamic-TabWrapper" className="h-[750px] bg-pink-200 mt-60">
            <div id="container" className="w-full h-[500px] m-auto ">
                <div className="min-h-[1000px]">
                    <div id="mainTabListWrapper" className="flex row-1">
                        {genres.map((genres) => (
                           <div className="flex row">
                             <button
                            key={genres.name}
                            onClick={() => setThisGenre(genres)}
                            className={`flex items-center gap-2 px-4 py-4 w-auto border-b-2 transition-all durations-400
                                ${thisGenre.name === genres.name ? "border-rose-500 text-rose-500" : "border-transparent"}
                                ${thisGenre.name === genres.name ? genres.image : "border-collapse"}
                                `}
                                >
                                <span>{genres.name}</span>
                            </button>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}