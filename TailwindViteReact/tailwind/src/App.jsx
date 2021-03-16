import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import './css/tailwind.css'
import Card from './components/Card'

function App() {
  // request https://randomuser.me/api/?results=20
  const [data, setData] = useState([]);
 
  useEffect( () => {
    fetch("https://randomuser.me/api/?results=20", {
      method: "GET",

    })
      .then((response) => response.json())
      .then((result) => {
        setData(result.results)
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  return (
    <>
    <div className="bg-gray-100 grid lg:grid-cols-2">
      <div className="px-8 py-12 max-w-md m-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
        <img className="h-10" src="assets/One-Piece.ico" alt="One Piece" />
        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-96 sm:w-full sm:object-cover object-top lg:hidden" src="assets/kaidu.jpg" alt="kaidu" />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-3xl lg:text-2xl">
          You can work from any where. <br />
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos deserunt asperiores voluptates deleniti temporibus debitis sed blanditiis libero? Labore placeat et ipsam voluptate quibusdam architecto eos, molestiae cupiditate beatae.</p>
        <div className="mt-4 sm:mt-6">
          <a href="#" className="btn">
            Book your escape
          </a>
        </div>
      </div>
      <div className="hidden relative lg:block">
        <img className="absolute inset-0 w-full h-full object-cover object-top" src="assets/kaidu.jpg" alt="kaidu" />
      </div>
    </div>
    <div className="space-y-4 py-12 px-2 grid lg:grid-cols-3 md:grid-cols-2">
      {data.map(x=>console.log(x.location))}
      {data && data.map(user => (
        <Card props={{img:user.picture.large,title: `${user.name.title} ${user.name.first} ${user.name.last}`,body:`${user.location.city}, ${user.location.state}, ${user.location.country}`}} />
      ))}
    </div>
    </>
  );
}

export default App
