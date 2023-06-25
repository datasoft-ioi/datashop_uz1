import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


function Pr({  addCategory }) {

    Pr.propTypes = {
        setSt: PropTypes.func.isRequired,
        st: PropTypes.string.isRequired,
        addCategory: PropTypes.func.isRequired,
        AddLaptop: PropTypes.func.isRequired,
        AddMonitor: PropTypes.func.isRequired,
        AddAksesuar: PropTypes.func.isRequired,
        AddSmartfon: PropTypes.func.isRequired
    };

    // onqiliq bolgan produqtni shopa chiqarib barishina javob bardi

    // onqiliq bolgan produqtni shopa chiqarib barishina javob bardi


    return (
        <div className="prMenu">
            <Link to='/shop'>
                <h1>Ноутбуки</h1>
            </Link>
            <ul>
                <Link to='/shop' onClick={addCategory}>  <li>Hp</li></Link>
                <Link to='/shop' onClick={addCategory}><li>Asus</li></Link>
                <Link to='/shop' onClick={addCategory}><li>Acer</li></Link>
                <Link to='/shop' onClick={addCategory}> <li>MSI</li></Link>
            </ul>
        </div>
    )

}

export default Pr