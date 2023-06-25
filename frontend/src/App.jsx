import Footer from './footer/Footer';
import Navbar from './navbar/Navbar'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import WebMenu from './WebMenu';
import Shop from './shop/Shop';
import { useState } from 'react';
import tufGamingPng from './texnoimg/tufgaming.png'
import victus from './texnoimg/victus.png'
import aser from './texnoimg/acer.png'
import Laptop from './shop/Laptop';
import m1 from './texnoimg/m1.png'
import m2 from './texnoimg/m2.png'
import m3 from './texnoimg/m3.png'
import m4 from './texnoimg/m4.png'
import Korzinka from './Korzina/Korzina';
import Zakaz from './Zakaz/Zakaz';
import Kabinet from './profil/Kabinet';
import Account from './profil/Accaunt';
import MoyZakaz from './profil/MoyZakaz';
import Xabar from './profil/Xabar';
import Izb from './izbronoe/Izb'
// booto bar uchun icoon ================= START
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { RxPerson } from 'react-icons/rx'
import KorzinkaPustoy from './Korzina/KorzinkaPustoy';
import Login from './profil/Login';
// booto bar uchun icoon ================= END


function App() {

  let baseURL = 'https://api.datashop.uz'



  const [laptops] = useState([
    {
      id: 1,
      img: tufGamingPng,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 2,
      img: aser,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 3,
      img: victus,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 4,
      img: tufGamingPng,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 5,
      img: aser,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 6,
      img: victus,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 7,
      img: tufGamingPng,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 8,
      img: aser,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 9,
      img: victus,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
    {
      id: 10,
      img: tufGamingPng,
      name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
      prise: '????'
    },
  ])


  const [monitors] = useState([
    {
      id:1,
      img: m1,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:2,
      img: m2,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:3,
      img: m3,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:4,
      img: m4,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:5,
      img: m1,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:6,
      img: m2,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:7,
      img: m3,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:8,
      img: m4,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:9,
      img: m1,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    },
    {
      id:10,
      img: m2,
      name: 'Gigabyte — 32″ G32QC-EK Curved...',
      prise: '????'
    }
  ])

  const [smartfon] = useState([
    {
      id:1,
      img: 'https://free-png.ru/wp-content/uploads/2021/02/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024-7ccac3cc.png',
      name: 'Iphone 14 Pro Max',
      prise: '14.500'
    }
  ])

  const [aksesuar] = useState([
    {
      id:1,
      img: 'https://img.cgaxis.com/2021/11/airpods_max_silver_a.webp',
      name: 'AirPods Max',
      prise: '14.500'
    }
  ])

  // Shop ichindagi productlani chiqishini taminlidi
  const [shops, setShops] = useState([])  // Shop ichindagi productlani chiqishini taminlidi
  // Shop ichindagi productlani chiqishini taminlidi


  // shop qismina produqtlani nomina qarab yubaradi ===============
  function AddLaptop() {
    setShops(laptops)
  }
  function AddMonitor() {
    setShops(monitors)
  }                                                               // shop qismina produqtlani nomina qarab yubaradi ===============
  function AddSmartfon() {
    setShops(smartfon)
  }
  function AddAksesuar() {
    setShops(aksesuar)
  }
  // shop qismina produqtlani nomina qarab yubaradi ===============

  const [adds, add] = useState([])
  const [fotChange, setFotChange] = useState('')
  const [addKorzinka, setAddKorzinka] = useState([])



  // korzinka ischindagi nasani dalete atadi
  function Delete(id) {
    console.log(id);
    const filtered = addKorzinka.filter(korzinka => korzinka.id != id)    // korzinka ischindagi nasani dalete atadi
    setAddKorzinka(filtered)
    console.log(filtered)
  }
  // korzinka ischindagi nasani dalete atadi

  // ikki element qoshilsa count qoshiladi
  function FilterAdd(id) {
    const filtered = addKorzinka.filter(addKorzin => addKorzin.id !== id)
    setAddKorzinka(filtered)
  }
  // ikki element qoshilsa count qoshiladi

  // Korzinka Count ===== START
  const [count, setCount] = useState(1)
  function CountPlus() {
    setCount(count + 1)
  }
  function CountMinus() {
    setCount(count - 1)
    if (count == 0) {
      setCount(0)
    }
  }

  return (
    <>
      <BrowserRouter>
        {/* <Snowfall 
          style={{ 
            position: 'fixed', 
            width: '100vw', 
            height: '100vh', 
            zIndex: 999999 
    
          }} 
          snowflakeCount={200} 
          radius={[10, 20]} 
          speed={[0.5, 2.5]} 
          wind={[-0.5, 2]} 
          images={images} 
          rotationSpeed={[-1, 1]} 
        /> */}
        
        <Navbar
          addKorzinka={addKorzinka}
          AddLaptop={AddLaptop}
          AddMonitor={AddMonitor}
          AddSmartfon={AddSmartfon}
          AddAksesuar={AddAksesuar}
          setFotChange={setFotChange} />
        <Routes>
          <Route path='/' element={<WebMenu baseURL={baseURL} laptops={laptops} monitors={monitors} add={add} />} />
          <Route path='/shop' element={<Shop shops={shops} />} />
          <Route path='/product/:productId' element={<Laptop adds={adds} setAddKorzinka={setAddKorzinka} FilterAdd={FilterAdd} products={laptops} />} />
          <Route path='/korzinka' element={<Korzinka count={count} CountPlus={CountPlus} CountMinus={CountMinus} addKorzinka={addKorzinka} Delete={Delete} setAddKorzinka={setAddKorzinka} />} />
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/kabinet' element={<Kabinet />} />
          <Route path='/profilZakaz' element={<MoyZakaz />} />
          <Route path='/xabar' element={<Xabar />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Избранное' element={<Izb add={add} laptops={laptops} />} />
          <Route path='/korzinkaNoneProduct' element={<KorzinkaPustoy />} />

        </Routes>
        <Footer fotChange={fotChange} />
        <div className="bottomBar">
          <div className="shopLenght">
            <span>{addKorzinka.length}</span>
          </div>
          <Link to='/'><button>
            <FiHome size={'18px'} />
            <span>Главная</span>
          </button></Link>
          <Link to='/Избранное'><button>
            <AiOutlineStar size={'18px'} />
            <span>Избранное</span>
          </button></Link>
          <Link to='/korzinka'><button>
            <FiShoppingCart size={'18px'} />
            <span>Корзина</span>
          </button></Link>
          <Link to='/account'><button>
            <RxPerson size={'18px'} />
            <span>Профиль</span>
          </button></Link>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App