import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Korzinka({ addKorzinka, Delete, CountPlus, count, CountMinus, setLeng }) {
    Korzinka.propTypes = {
        addKorzinka: PropTypes.array.isRequired,
        Delete: PropTypes.func.isRequired,
        setAddKorzinka: PropTypes.func.isRequired,
        CountPlus: PropTypes.func.isRequired,
        count: PropTypes.number.isRequired,
        CountMinus: PropTypes.func.isRequired,
    };
    const token = JSON.parse(localStorage.getItem("token"));

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // Yangi holat

    const URL = "https://api.datashop.uz/";

    const addProduct = async () => {
        const url = "https://api.datashop.uz/cart/";

        const headers = {
            Authorization: `Bearer ${token.tokens.access}`,
        };

        try {
            const response = await axios.get(url, { headers });
            console.log(response.data);
            setProducts(response.data);

            // Mahsulatlar ro'yxati o'zgarayotganida total narxni hisoblash
            calculateTotalPrice(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        addProduct();
    }, []);

    const calculateTotalPrice = (products) => {
        let total = 0;

        products.forEach((product) => {
            const price = product.products[0].price;
            const quantity = product.quantity;
            const productTotal = price * quantity;
            total += productTotal + 30;
        });

        setTotalPrice(total);
    };

    if (products.length >= 0) {
        setLeng(0);
    } else {
        setLeng(products.length);
    }

    const DeleteCard = async (productId) => {
        const url = `https://api.datashop.uz/cart/${productId}`;

        const headers = {
            Authorization: `Bearer ${token.tokens.access}`,
        };

        try {
            const response = await axios.delete(url, { headers });

            addProduct();
        } catch (error) { }
    };

    console.log(products);

    return (
        <div className="korzinka">
            <div className="products">
                <ul className="linkCategory">
                    <li>Главная</li>
                    <li> / Корзина</li>
                </ul>
                <div className="korzinkaProduct">
                    <div className="korzinkaTitle">
                        <h1>Корзина</h1>
                        <span>Товаров в корзине ({addKorzinka.length})</span>
                    </div>
                    <div className="korzinkaElment">
                        <div className="korzinkaElmentTitle">
                            <h3>Детали продуктов</h3>
                            <span>
                                <h3 id='none'>Количество</h3>
                                <h3 id='none'>Цена</h3>
                            </span>
                        </div>
                        <div className="korzinkaProducts">
                            {
                                products.map(product => (
                                    <div className="Kproduct" key={product.id}>
                                        <div className="KproductInfo">
                                            <div className="KproductImg">
                                                <img src={URL + product.products[0].images[0]} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <span className='productInfo1'>{product.products[0].name}</span>
                                                <span className='productInfo2'>Ноутбук</span>
                                                <span className='resPrise'>{product.products[0].price} 000</span>
                                                <span className='productInfo3' onClick={() => DeleteCard(product.id)}>Удалить</span>
                                            </div>
                                        </div>
                                        <div className="KproductEnd">
                                            <div className="KproductCount">
                                                <button onClick={CountMinus}>-</button>
                                                <span>{product.quantity}</span>
                                                <button onClick={CountPlus}>+</button>
                                            </div>
                                            <div className="KproductPrice">
                                                <span>{product.products[0].price} 000 so'm</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='KorzinkaCon'>
                <div className="korzinkaInfoBar">
                    <div className="korzinkaInfoBarInfo">
                        <div className="korzinkaInfoBarTitle">
                            <h1>Итого:</h1>
                            <span>{totalPrice} 000 so'm</span>
                        </div>
                        <div className="korzinkaInfoBarFon">
                            <span className='korzinkaInfoBarFon1'>
                                <h5 className='korzinkaPriceInfo'>Промокод: </h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>0 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма доставки: </h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>30.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма товара:</h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>736.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5> Доставка:</h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>Курьером</h5>
                            </span>
                        </div>
                        <div className="korzinkaInfoBarPrice">
                            <h3>Общая сумма</h3>
                            <h3>6 800 000 СУМ</h3>
                        </div>
                    </div>
                    <div className="zakazBtn">
                        <Link to='/zakaz'> <button>Оформить заказ</button> </Link>
                        <span>Нажимая Оформить заказ, я соглашаюсь с публичным договором оферты</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Korzinka