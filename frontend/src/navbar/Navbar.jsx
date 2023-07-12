import '../style/app.css'
import uzbFlag from '../media/uzb.svg'
import DataLogo from '../media/datalogo 1.png'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import shopIcon from '../media/shopIcon.svg'
import profilIcon from '../media/profilIcon.svg'
import profilIcon1 from '../media/Vector.png'
import profilIcon2 from '../media/boxtick3.png'
import profilIcon3 from '../media/bell.png'
import profilIcon4 from '../media/x-circle.png'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { BsLaptop } from 'react-icons/bs'
import { MdOutlineNavigateNext } from 'react-icons/md'
import Pr from './Pr'
import { Link   , useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import izbIcon from '../media/izb.svg'
import { FiPhone } from 'react-icons/fi'
import PropTypes from 'prop-types';
import axios from 'axios'



function Navbar({ AddLaptop, AddMonitor, AddSmartfon, AddAksesuar, setFotChange, addKorzinka , leng }) {
    Navbar.propTypes = {
        AddLaptop: PropTypes.func.isRequired,
        AddMonitor: PropTypes.func.isRequired,
        AddSmartfon: PropTypes.func.isRequired,
        AddAksesuar: PropTypes.func.isRequired,
        setFotChange: PropTypes.func.isRequired,
        addKorzinka: PropTypes.array.isRequired,
        korzinkaOn: PropTypes.bool.isRequired
    };


    const [trm, setTrm] = useState(1000)
    const [icon, setIcon] = useState(<BiCategory size='27px' color='#ffffff' />)
    const [noneBorder, setNoneBoreder] = useState('')
    const [st, setSt] = useState('laptop')
    const [pr, setPr] = useState('navProfil')

    function profil() {
        if (pr == 'navProfil') {
            setPr('navProfil pr')
        }
        if (pr == 'navProfil pr') {
            setPr('navProfil')
        }
    }

    function addCategory() {
        if (trm == 0) {
            setTrm(1500)
            setIcon(<BiCategory size='27px' color='#ffffff' />)
            setNoneBoreder('')
        } else {
            setTrm(0)
            setTimeout(() => {
                setIcon(<IoClose size='27px' color='#ffffff' />)
                setNoneBoreder('none')
            }, 100);
        }
    }

    // ADD KATEGOY RESPANSIVE =================== START //
    function addCategoryRes() {
        if (trm == 1500) {
            setIcon(<BiCategory size='27px' color='#ffffff' />)
            setTrm(0)
        }
        else {
            setIcon(<BiCategory size='27px' color='#ffffff' />)
            setTrm(1500)
        }
    }
    // ADD KATEGOY RESPANSIVE =================== END //

    // navbar fixed function ==============================

    const [scrolled, setScrolled] = useState('');

    const scrollFixed = () => {
        const scrol = window.scrollY;

        if (scrol > 600) {
            setScrolled('nav');
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFixed)
    })
    // navbar fixed function ==============================
    // navbar respansive uchun fixed START ======================
    const [scrolledRes] = useState('navResBottom');

    const scrollFixedRes = () => {
        const scrol = window.scrollY;

        if (scrol > 600) {
            setScrolled('nav');
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFixedRes)
    })
    // navbar respansive uchun fixed END ======================
    // const ApiUser = JSON.parse(localStorage.getItem('user'))
    const [categores , setCategores]  = useState([])

    const catgoRrequest = async () => {
        const url = "https://api.datashop.uz/cateogry/"
        const getCategory = await axios.get(url)
        setCategores(getCategory.data)
    }
    useEffect(() => {
        catgoRrequest()
    } , [])

    // logut 
    const navigate = useNavigate()
    const handleLogout = () => {
        // Foydalanuvchi ma'lumotlarini tozalash
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    
        // Foydalanuvchini tizimning kirish sahifasiga yo'naltirish
        navigate('/login');
      };

    return (
        <nav className={scrolled}>
            <div className="navTop">
                <div className="container">
                    <div className="navTopLeft">
                        <span className='adresNav'>Адрес: Urganch, Darital, 2-этаж</span>
                    </div>
                    <div className="navTopRight">
                        <span className='adresNav'><p>Телефон поддержки:</p> (99) 900 10 10</span>
                        <div className="til">
                            <img src={uzbFlag} alt="" />
                            <select name="Til" id="" className='navSec'>
                                <option value="uzb">UZB</option>
                                <option value="rus">RUS</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* nav bottom */}
            <div className="nav-b" style={{ boxShadow: noneBorder }}>
                <div className="navBottom">
                    <div className="LogoBtnCon">
                        <Link to='/' onClick={() => setFotChange('')}><img className='dataLogo' src={DataLogo} /></Link>
                    </div>
                    <button onClick={addCategory} className="CategoryBtn">{icon} Категория</button>
                    <div className="navSearch">
                        <input type="text" placeholder='Введите запрос...' />
                        <button className='navSearchBtn'><HiOutlineSearch color='#ffffff' size='24px' /></button>
                    </div>
                    <div className="navBtns">
                        <Link to='/korzinka' onClick={() => setFotChange('none')}><button className='navKorzinkabutton'><img src={shopIcon} alt="" /> <span>Корзина</span></button></Link>
                        <Link to='/Избранное'><button className='navIzbbutton'><img src={izbIcon} alt="" /> <span>Избранное</span></button></Link>
                        <Link to='/login'> <button onClick={profil}> <span className='navProfilbutton'><img src={profilIcon} alt="" />   profil  </span></button></Link>
                        {/* <Link to='/account'> <button  onClick={profil}> <span className='navProfilbutton'><img src={profilIcon} alt="" /> {ApiUser.username ? ApiUser.username : "  Профиль" } </span></button></Link> */}
                        <span className='kLenght'>{leng.length}</span>
                        <div className={pr}>
                            <p className="profilTitle">Name</p>
                            <div className="profilPage">
                                <Link to='/kabinet'><span><img src={profilIcon1} alt="" /> Личный кабинет</span></Link>
                                <Link to='/profilZakaz'><span><img src={profilIcon2} alt="" /> Мои заказы</span></Link>
                                <Link to='/xabar'><span><img src={profilIcon3} alt="" /> Уведомления </span></Link>
                                <span onClick={handleLogout}><img src={profilIcon4} alt="" /> Выйти </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category" style={{ transform: `translateY(-${trm}px)` }}>
                <div className="categoryCloseRes">
                    <div className="LogoBtnCon">
                        <Link to='/' onClick={() => setFotChange('')}><img className='dataLogo' src={DataLogo} /></Link>
                    </div>
                    <IoClose onClick={addCategoryRes} color="#FFFFFF" size={'30px'} />
                </div>
                <div className="categoryCon">
                    <ul className="ctMenu">
                        {
                            categores.map(item => (
                                <li key={item.id} onClick={() => setSt('laptop')}>  <button>  <span><BsLaptop className='ctIcon' size='26px' /> <span>{item.name}</span></span> <MdOutlineNavigateNext className='ctIcon' size='22px' /></button></li>
                            ))
                        }
                    </ul>
                    <div className="ctInfo">
                        <Pr AddSmartfon={AddSmartfon} AddAksesuar={AddAksesuar} AddMonitor={AddMonitor} st={st} setSt={setSt} addCategory={addCategory} AddLaptop={AddLaptop} />
                    </div>
                </div>
                <div className="categoryClose" onClick={addCategory}>

                </div>
            </div>
            <div className="navRes">
                <div className="navResTop">
                    <Link to='/' onClick={() => setFotChange('')}><img className='dataLogo' src={DataLogo} /></Link>
                    <div className="navResTopBtn">
                        <FiPhone size={'18px'} />
                        <div className="til">
                            <img src={uzbFlag} alt="" />
                            <select name="Til" id="" className='navSec'>
                                <option value="uzb">UZB</option>
                                <option value="rus">RUS</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={scrolledRes}>
                    <button onClick={addCategory} className="CategoryBtn">{icon}</button>
                    <div className="navSearch">
                        <input type="text" />
                        <button className='navSearchBtn'><HiOutlineSearch color='#ffffff' size='20px' /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar