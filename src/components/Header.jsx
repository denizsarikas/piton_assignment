import '../components/Header.css'
import Cart from '../img_and_logos/Icon.svg'
import Logo from '../img_and_logos/Logo.svg'
import Heart from '../img_and_logos/Heart.svg'
import UserIcon from '../img_and_logos/user.svg'
//import Vector from '../img_and_logos/Vector.svg'

const Header = () => {
    return (
        <div className=' fixed top-0 left-0 right-0 h-16 bg-white flex justify-between items-center'>
            <div className='p-0 w-20 mt-1 inline-block'>
                <img className='block h-98 w-24' src={Logo} alt="logo" />
            </div>

            <div>
                <input
                type="text"
                className='flex flex-row items-center h-12 w-80 bg-[#F4F4FF] rounded'
                placeholder='Search'
                />
            </div>

            <div className='flex'>
                <img src={UserIcon} alt='userIcon' className='mr-2 bg-[#F4F4FF] rounded h-6 w-12' />
                <img src={Heart} alt='userIcon' className='mr-2 bg-[#F4F4FF] h-6 w-12 rounded' />
                <img src={Cart} alt='userIcon' className='mr-2 bg-[#F4F4FF] rounded h-6 w-12' />
            </div>
        </div>
    );
};

export default Header