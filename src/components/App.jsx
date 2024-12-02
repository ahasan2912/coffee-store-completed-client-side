import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
      <h1 className='text-6xl text-center text-purple-600 mt-8'>Hot Hot Clod Clod Coffee{coffees.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-10">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees}
          setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App


/* https://i.ibb.co.com/6XPk3nf/espresso.webp
https://i.ibb.co.com/FBhC5qD/istockphoto-505168330-612x612.webp
https://i.ibb.co.com/rvFz4NW/unnamed-be2775a1-186d-40c1-b094-488fa5fa4050.webp
https://i.ibb.co.com/FXY0Yb3/image3-63f62a8a-c679-4bc2-9d65-8025ed2d7982-480x480.webp
https://i.ibb.co.com/7pCMWZZ/the-perfect-mocha-coffee-29100-16x9.jpg
https://i.ibb.co.com/yB9BbTf/cold-brew.jpg
https://i.ibb.co.com/9GJp9MR/robbie-down-LI8iny-Hnm-A-unsplash.jpg
https://i.ibb.co.com/k2BS3LT/375c5968-268c-407b-8910-d2731fc1d996.webp
https://i.ibb.co.com/YkFsFCn/Turkish-Coffee-16eff1f0-bb77-469e-957c-4b97d43789fa.webp
https://i.ibb.co.com/Pz60DqL/download.jpg
https://i.ibb.co.com/FmXVQ4Q/Doppio.jpg
https://i.ibb.co.com/k0TxTTM/JJ-1808-Q2-Drinks-Shoot-0622-Web-975-730-5.webp */

