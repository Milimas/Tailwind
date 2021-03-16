import React from 'react'

export default function Card({props}) {
    const { img, title, body } = props
    return (
        <div className="grid grid-cols-5 gap-4 bg-gray-50 shadow-md py-2 px-4 rounded-md w-full transform transition hover:-translate-y-0.5">
            <img className="w-full h-full object-cover object-center rounded-md" src={img} alt=""/>
            <div className="col-span-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="font-normal text-gray-500">{body}</p>
            </div>
        </div>
    )
}