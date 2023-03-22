import { animateScroll } from 'react-scroll';
import Link from 'next/link';
import { BsArrowUpCircle } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <footer className='text-white flex flex-col h-52 pt-5 bg-black'>
      <div id='footer-top' className='self-center'>
        <a href='#' className='flex justify-center text-xl' onClick={scrollToTop}>
          <BsArrowUpCircle className='mr-2 animate-bounce' />
          <span>Back to Top</span>
        </a>
      </div>
      <div id='footer-bottom' className='flex justify-between'>

        <div id='footer-left' className='flex flex-col ml-40 mt-10'>
          <Link href='/' className='bg-white  text-black mb-5 hover:bg-cyan-400'>
            <p className='m-3 w-20 '>Home</p>
          </Link>
          <Link href='/categories' className='bg-white self-center text-black hover:bg-cyan-400'>
            <p className='m-3 w-20'>Categories</p>
          </Link>
        </div>

        <div id='footer-right' className='flex mr-40 mt-10 w-40 justify-evenly'>
          <Link href='https://github.com/Atharva123987'><AiFillGithub className='text-3xl'/></Link>
          <Link href='https://www.linkedin.com/in/atharva-amberkar/'><CiLinkedin className='text-3xl'/></Link>
          <Link href='mailto:atharva.amberkar@gmail.com'><AiOutlineMail className='text-3xl'/></Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
