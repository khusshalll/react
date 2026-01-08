import react from 'react';

function Card( {username , price} ) {
    console.log(username );
  return (
     <div className="w-60 flex flex-col rounded-xl bg-black padding-2 m-4 text-white hover:scale-105 hover:shadow-xl hover:shadow-gray-400 duration-300 ease-in-out">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6j0yynFkEMl2BqIZLIo51hlkTF4AlPydanA&s"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold " > {username}</h1>
          
        </div>
        <div className="flex  justify-between  "  >
          <p>Price</p>
          <p>{price}</p>
        </div>
      </div>
    </div> )}

export default Card;
