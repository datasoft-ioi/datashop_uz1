import '../style/shop.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
// import laptop from '../media/laptop.png'
// import laptopuse from '../media/laptopuse.png'
// import laptopbottom from '../media/vectusHeader.png'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TbCircleCheck } from 'react-icons/tb'
import PropTypes from 'prop-types';
import axios from 'axios'



export default function Laptop({ adds, setAddKorzinka, FilterAdd, products }) {

    Laptop.propTypes = {
        adds: PropTypes.func.isRequired,
        setAddKorzinka: PropTypes.func.isRequired,
        FilterAdd: PropTypes.func.isRequired,
        Korzinka: PropTypes.number.isRequired,
        img: PropTypes.func.isRequired,
        setImg: PropTypes.func.isRequired,
        imgg: PropTypes.func.isRequired,
        img2: PropTypes.func.isRequired,
        setImg2: PropTypes.func.isRequired,
        img3: PropTypes.func.isRequired,
        setImg3: PropTypes.func.isRequired,
        products: PropTypes.func.isRequired,
        product: PropTypes.func.isRequired,
        id: PropTypes.func.isRequired
    };

    const [borger, setBorder] = useState('non')


    function border() {
        setBorder('active')
    }

    function Addkor() {
        setAddKorzinka(value => ([
            ...value,
            {
                id: adds.id,
                img: adds.img
            }
        ]))
        setSavebar('saveK')
        setTimeout(() => {
            setSavebar('saveKClose')
        }, 1500);
    }
    const [savebar, setSavebar] = useState('saveKClose')

    // const product = products.find((product) => product.id === parseInt(productId));
    const { productId } = useParams();
    const [product, setProduct] = useState();

    const productView = async () => {
        try {
            const response = await axios.get(`https://api.datashop.uz/products/${productId}`);
            console.log(response.data);
            setProduct(response.data);
        } catch (error) {
            console.error(error.response);
            console.error(error.message);
        }
    };

    console.log(product);

    useEffect(() => {
        productView();
    }, [productId]);

    return (
        <div className="Laptop">
            <div className="LaptopContainer">
                <span className="kategoriLink">Главная  /  Категория / Ноутбуки / HP / {product.name}   </span>
                <div className="LaptopName">
                    <h1 className="LaptopTitle">{product.name}</h1>
                    <div className="eva">
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                    </div>
                </div>
                <div className="LaptopTovar">
                    <div className="LaptopImage">
                        <div className="LaptopImgg">
                            <img className='laptopImgg' src={product.images[0].image} alt="" />
                        </div>
                        <div className="ImagesMini">
                            {
                                product.images && product.images.map(item => (
                                    <div key={product.id} onClick={border} className={`miniBorder  ${borger}`}>
                                        <img src={item.image} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="LaptopInfo">
                        <p className="InfoTitle">Коротко о товаре</p>
                        {product.xususiyatlari && product.xususiyatlari.map(item => (
                            <div className="" key={product.id}>
                                <span>{item.title}</span>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                        {/* <span className='drection'>Все характеристики</span> */}
                    </div>

                    <div className="LaptopMoneyDiv">
                        <div className="LaptopKupit">
                            <h1 className="sum">{product.price} sum</h1>
                            <button onClick={Addkor}>
                                <svg strokeWidth="1" onClick={FilterAdd} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6172 7.00001C22.4319 6.70063 22.1664 6.45114 21.8467 6.27588C21.5271 6.10062 21.1641 6.00557 20.7933 6.00001H7.05995L6.43766 3.74001C6.37479 3.52184 6.23452 3.32995 6.03969 3.19558C5.84487 3.06121 5.60697 2.99227 5.36475 3.00001H3.21891C2.93436 3.00001 2.66146 3.10536 2.46025 3.2929C2.25904 3.48044 2.146 3.73479 2.146 4.00001C2.146 4.26522 2.25904 4.51958 2.46025 4.70711C2.66146 4.89465 2.93436 5.00001 3.21891 5.00001H4.54933L7.51058 15.26C7.57345 15.4782 7.71372 15.6701 7.90855 15.8044C8.10337 15.9388 8.34127 16.0077 8.5835 16H18.2397C18.4379 15.9994 18.632 15.9478 18.8005 15.8507C18.9691 15.7536 19.1055 15.6149 19.1946 15.45L22.7138 8.89001C22.8663 8.59202 22.9374 8.26348 22.9205 7.93369C22.9037 7.6039 22.7995 7.28313 22.6172 7.00001V7.00001ZM17.5745 14H9.39891L7.65006 8.00001H20.7933L17.5745 14Z" fill="white" />
                                    <path d="M8.04688 21C8.93571 21 9.65625 20.3284 9.65625 19.5C9.65625 18.6716 8.93571 18 8.04688 18C7.15805 18 6.4375 18.6716 6.4375 19.5C6.4375 20.3284 7.15805 21 8.04688 21Z" fill="white" />
                                    <path d="M18.0469 21C18.9357 21 19.6562 20.3284 19.6562 19.5C19.6562 18.6716 18.9357 18 18.0469 18C17.1581 18 16.4375 18.6716 16.4375 19.5C16.4375 20.3284 17.1581 21 18.0469 21Z" fill="white" />
                                </svg>
                                В корзину
                            </button>

                            <Link to='/zakaz' > <button className='LaptopKupitBtn'>Купить в один клик</button> </Link>
                        </div>
                        <div className="LaptopMoneyInfo">
                            <div className="">
                                <svg strokeWidth="1" onClick={FilterAdd} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6172 7.00001C22.4319 6.70063 22.1664 6.45114 21.8467 6.27588C21.5271 6.10062 21.1641 6.00557 20.7933 6.00001H7.05995L6.43766 3.74001C6.37479 3.52184 6.23452 3.32995 6.03969 3.19558C5.84487 3.06121 5.60697 2.99227 5.36475 3.00001H3.21891C2.93436 3.00001 2.66146 3.10536 2.46025 3.2929C2.25904 3.48044 2.146 3.73479 2.146 4.00001C2.146 4.26522 2.25904 4.51958 2.46025 4.70711C2.66146 4.89465 2.93436 5.00001 3.21891 5.00001H4.54933L7.51058 15.26C7.57345 15.4782 7.71372 15.6701 7.90855 15.8044C8.10337 15.9388 8.34127 16.0077 8.5835 16H18.2397C18.4379 15.9994 18.632 15.9478 18.8005 15.8507C18.9691 15.7536 19.1055 15.6149 19.1946 15.45L22.7138 8.89001C22.8663 8.59202 22.9374 8.26348 22.9205 7.93369C22.9037 7.6039 22.7995 7.28313 22.6172 7.00001V7.00001ZM17.5745 14H9.39891L7.65006 8.00001H20.7933L17.5745 14Z" fill="white" />
                                    <path d="M8.04688 21C8.93571 21 9.65625 20.3284 9.65625 19.5C9.65625 18.6716 8.93571 18 8.04688 18C7.15805 18 6.4375 18.6716 6.4375 19.5C6.4375 20.3284 7.15805 21 8.04688 21Z" fill="white" />
                                    <path d="M18.0469 21C18.9357 21 19.6562 20.3284 19.6562 19.5C19.6562 18.6716 18.9357 18 18.0469 18C17.1581 18 16.4375 18.6716 16.4375 19.5C16.4375 20.3284 17.1581 21 18.0469 21Z" fill="white" />
                                </svg>

                                <p className="">Быстрая доставка в течении  3-4 дней</p>
                            </div>
                            <div className="">
                                <svg strokeWidth="1" onClick={FilterAdd} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6172 7.00001C22.4319 6.70063 22.1664 6.45114 21.8467 6.27588C21.5271 6.10062 21.1641 6.00557 20.7933 6.00001H7.05995L6.43766 3.74001C6.37479 3.52184 6.23452 3.32995 6.03969 3.19558C5.84487 3.06121 5.60697 2.99227 5.36475 3.00001H3.21891C2.93436 3.00001 2.66146 3.10536 2.46025 3.2929C2.25904 3.48044 2.146 3.73479 2.146 4.00001C2.146 4.26522 2.25904 4.51958 2.46025 4.70711C2.66146 4.89465 2.93436 5.00001 3.21891 5.00001H4.54933L7.51058 15.26C7.57345 15.4782 7.71372 15.6701 7.90855 15.8044C8.10337 15.9388 8.34127 16.0077 8.5835 16H18.2397C18.4379 15.9994 18.632 15.9478 18.8005 15.8507C18.9691 15.7536 19.1055 15.6149 19.1946 15.45L22.7138 8.89001C22.8663 8.59202 22.9374 8.26348 22.9205 7.93369C22.9037 7.6039 22.7995 7.28313 22.6172 7.00001V7.00001ZM17.5745 14H9.39891L7.65006 8.00001H20.7933L17.5745 14Z" fill="white" />
                                    <path d="M8.04688 21C8.93571 21 9.65625 20.3284 9.65625 19.5C9.65625 18.6716 8.93571 18 8.04688 18C7.15805 18 6.4375 18.6716 6.4375 19.5C6.4375 20.3284 7.15805 21 8.04688 21Z" fill="white" />
                                    <path d="M18.0469 21C18.9357 21 19.6562 20.3284 19.6562 19.5C19.6562 18.6716 18.9357 18 18.0469 18C17.1581 18 16.4375 18.6716 16.4375 19.5C16.4375 20.3284 17.1581 21 18.0469 21Z" fill="white" />
                                </svg>

                                <p className="">Возможность открыть товар у курьера</p>

                            </div>
                            <div className="">
                                <svg strokeWidth="1" onClick={FilterAdd} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6172 7.00001C22.4319 6.70063 22.1664 6.45114 21.8467 6.27588C21.5271 6.10062 21.1641 6.00557 20.7933 6.00001H7.05995L6.43766 3.74001C6.37479 3.52184 6.23452 3.32995 6.03969 3.19558C5.84487 3.06121 5.60697 2.99227 5.36475 3.00001H3.21891C2.93436 3.00001 2.66146 3.10536 2.46025 3.2929C2.25904 3.48044 2.146 3.73479 2.146 4.00001C2.146 4.26522 2.25904 4.51958 2.46025 4.70711C2.66146 4.89465 2.93436 5.00001 3.21891 5.00001H4.54933L7.51058 15.26C7.57345 15.4782 7.71372 15.6701 7.90855 15.8044C8.10337 15.9388 8.34127 16.0077 8.5835 16H18.2397C18.4379 15.9994 18.632 15.9478 18.8005 15.8507C18.9691 15.7536 19.1055 15.6149 19.1946 15.45L22.7138 8.89001C22.8663 8.59202 22.9374 8.26348 22.9205 7.93369C22.9037 7.6039 22.7995 7.28313 22.6172 7.00001V7.00001ZM17.5745 14H9.39891L7.65006 8.00001H20.7933L17.5745 14Z" fill="white" />
                                    <path d="M8.04688 21C8.93571 21 9.65625 20.3284 9.65625 19.5C9.65625 18.6716 8.93571 18 8.04688 18C7.15805 18 6.4375 18.6716 6.4375 19.5C6.4375 20.3284 7.15805 21 8.04688 21Z" fill="white" />
                                    <path d="M18.0469 21C18.9357 21 19.6562 20.3284 19.6562 19.5C19.6562 18.6716 18.9357 18 18.0469 18C17.1581 18 16.4375 18.6716 16.4375 19.5C16.4375 20.3284 17.1581 21 18.0469 21Z" fill="white" />
                                </svg>

                                <p className="">Все товары имееют гарантию</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={savebar}>
                <TbCircleCheck color='#48FF2B' size='32px' />
                <span>Товар добавлен в корзину</span>
            </div>
        </div>
    )
}