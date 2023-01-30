import { Link } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import NavButton from "./NavButton";
import DropdownBurger from "./DropdownBurger";

const Navbar = () => {
  return (
    <div className='h-16 w-full mt-7'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Link to='/'>
            <RiMovie2Fill className='float-left h-12 w-12 text-white opacity-80' />
          </Link>
          <Link to='/'>
            <h1 className='font-semibold text-5xl text-white opacity-80 lg:visible invisible lg:w-fit lg:h-fit w-0 h-0'>
              MovieLake
            </h1>
          </Link>
        </div>

        <div>
          <div className='flex items-center visible lg:invisible lg:w-0 lg:h-0'>
            <DropdownBurger />
          </div>
          <div className='flex items-center invisible w-0 h-0 lg:visible lg:w-fit lg:h-fit'>
            <div className='flex'>
              <Link to='/'>
                <NavButton
                  btnText='HOME'
                  btnStyle='rounded-l-xl border-l-2 border-y-2'
                />
              </Link>

              <Link to='/movies'>
                <NavButton btnText='MOVIES' btnStyle='border-y-2' />
              </Link>

              <Link to='/shows'>
                <NavButton
                  btnText='SHOWS'
                  btnStyle='border-y-2 border-r-2 rounded-r-xl'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
