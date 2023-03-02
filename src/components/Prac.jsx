import react from 'react'
import { useNavigate } from 'react-router-dom';
import data from "../Data";


const Prac = () => {
    const navigate = useNavigate();

    const handleclick = (e) => {
        const test = e.target.id;
        navigate(`/renderprac/${test}`)
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="h-[80%] w-[60%] flex flex-col items-center justify-between">
                    <div className="logo">

                    </div>
                    <p className="text-gray-800 font-bold text-2xl sm:text-3xl font-serif">Please take a note</p>
                    <p className="text-red-600 text-xl font-serif py-3">! The application is under mentainence and im ready to improve it but please share your user experience and what type of facilities you want im fature please conway</p>

                    <div className="w-full flex flex-col mt-4 h-[75%] justify-evenly">
                        <ul className='flex h-full flex-col justify-evenly text-xl text-green-600 cursor-pointer font-bold'>
                            <li className='hover:text-2xl' id="1" onClick={handleclick}>Practical 1</li>
                            <li className='hover:text-2xl' id="2" onClick={handleclick}>Practical 2</li>
                            <li className='hover:text-2xl' id="3" onClick={handleclick}>Practical 3</li>
                            <li className='hover:text-2xl' id="4" onClick={handleclick}>Practical 4</li>
                            <li className='hover:text-2xl' id="5" onClick={handleclick}>Practical 5</li>
                            <li className='hover:text-2xl' id="6" onClick={handleclick}>Practical 6</li>
                            <li className='hover:text-2xl' id="7" onClick={handleclick}>Practical 7</li>
                            <li className='hover:text-2xl' id="8" onClick={handleclick}>Practical 8</li>
                            <li className='hover:text-2xl' id="9" onClick={handleclick}>Practical 9</li>
                            <li className='hover:text-2xl' id="10" onClick={handleclick}>Practical 10</li>
                            <li className='hover:text-2xl' id="11" onClick={handleclick}>Practical 11</li>
                            <li className='hover:text-2xl' id="12" onClick={handleclick}>Practical 12</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Prac;