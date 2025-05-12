import { useRef, useState, useEffect } from 'react'
import './App.css'
import Cards from './card.jsx'
import golden from './goldentemple.jpg'
import taj from './tajmahal.jpg'
import badri from './badrinath.jpg'
import goa from './goa.jpg'
import lotus from './lotustemple.jpg'
import kadr from './kardrnath.jpg'
import lkila from './Lalkila.jpg'
import kashmir from './kashmir.jpg'



function App() {
  let detail=[
    {Name:"Lotus Temple", price:"12K", about:"The Lotus Temple in New Delhi, India, is a Baháʼí House of Worship known for its lotus-shaped design. Completed in 1986, it welcomes people of all religions to meditate and pray. Built with white marble, it symbolizes peace, purity, and unity, attracting millions of visitors worldwide each year."},
    {Name:"Tajmahal", price:"15K", about:"The Taj Mahal, located in Agra, India, is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Completed in 1653, it is an architectural masterpiece symbolizing eternal love and is recognized as one of the New Seven Wonders of the World."},
    {Name:"Badrinath" ,price:"19K", about:"Badrinath Temple, located in Uttarakhand, India, is a sacred Hindu shrine dedicated to Lord Vishnu. It is part of the Char Dham pilgrimage and stands at 3,133 meters in the Himalayas. Surrounded by breathtaking scenery, the temple opens seasonally and attracts thousands of devotees seeking spiritual blessings and peace."},
    {Name:"Goa", price:"11K", about:"Goa, located on India’s western coast, is famous for its stunning beaches, vibrant nightlife, Portuguese heritage, and spice plantations. Known as a top tourist destination, it offers a unique blend of Indian and European cultures. Goa’s relaxed vibe, delicious seafood, and historic churches attract visitors from around the world."},
    {Name:"Lotus Temple", price:"17K", about:"The Lotus Temple in New Delhi, India, is a Baháʼí House of Worship famous for its lotus-shaped architecture. Completed in 1986, it welcomes people of all faiths for meditation and prayer. Built with white marble, it symbolizes peace, purity, and unity, and attracts millions of visitors each year."},
    {Name:"Kedarnath", price:"8K", about:"Kedarnath, located in Uttarakhand, India, is one of the most sacred Hindu temples dedicated to Lord Shiva. Situated at an altitude of 3,583 meters in the Himalayas, it is part of the Char Dham pilgrimage. The temple, surrounded by snow-capped peaks, attracts thousands of devotees seeking spiritual blessings."},
    {Name:"Lalkila" ,price:"33K", about:"The Red Fort, or Lal Qila, located in Delhi, India, is a historic fort built by Mughal Emperor Shah Jahan in 1648. Made of red sandstone, it served as the main residence of Mughal emperors. Today, it stands as a symbol of India’s rich history and hosts Independence Day celebrations."},
    {Name:"Jamu & Kashmir", price:"38K", about:"Jammu and Kashmir, located in northern India, is renowned for its breathtaking landscapes, snow-capped mountains, and serene valleys. Popularly called “Paradise on Earth,” it is famous for destinations like Srinagar, Gulmarg, and Vaishno Devi. Rich in culture and natural beauty, it attracts tourists and pilgrims from around the world."}
  ]
  const divRef = useRef(null);
  const [reload, setReload] = useState(false);  // just to trigger useEffect again

  function forceCheck() {
    setReload(prev => !prev);  // force useEffect to re-run
  }
  const [Notrip,setNotrip] =useState("Notrip");

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      const visibleChildren = Array.from(div.children).filter(
        child => window.getComputedStyle(child).display !== 'none'
      );

      if (visibleChildren.length === 0) {
        console.log('Div is empty');
        setNotrip("Notrip2");

      }
    }
  }, [reload]);

  
  return (
    <>
    <div className='had'>Plan For Trip With Friend.....</div>
    <div ref={divRef} className='outer'>
      <Cards forceCheck={forceCheck} image={golden} name={detail[0].Name} charges={detail[0].price} about={detail[0].about}></Cards>
      <Cards forceCheck={forceCheck} image={taj} name={detail[1].Name} charges={detail[1].price} about={detail[1].about}></Cards>
      <Cards forceCheck={forceCheck} image={badri} name={detail[2].Name} charges={detail[2].price} about={detail[2].about}></Cards>
      <Cards forceCheck={forceCheck} image={goa} name={detail[3].Name} charges={detail[3].price} about={detail[3].about}></Cards>
      <Cards forceCheck={forceCheck} image={lotus} name={detail[4].Name} charges={detail[4].price} about={detail[4].about}></Cards>
      <Cards forceCheck={forceCheck} image={kadr} name={detail[5].Name} charges={detail[5].price} about={detail[5].about}></Cards>
      <Cards forceCheck={forceCheck} image={lkila} name={detail[6].Name} charges={detail[6].price} about={detail[6].about}></Cards>
      <Cards forceCheck={forceCheck} image={kashmir} name={detail[7].Name} charges={detail[7].price} about={detail[7].about}></Cards>
      

    </div>
      
    <div className={Notrip}>
        <div className='no'>No More Trip Plan</div>
        <button className='relod' onClick={() => window.location.reload()} >Relode</button>
      </div>
    </>
  )
}

export default App