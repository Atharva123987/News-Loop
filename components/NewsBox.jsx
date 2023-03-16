import Image from 'next/image';
import Img from '../assets/news.jpeg'
export const NewsBox = () =>{
    return(
        <>
            <div className="m-2 border border-cyan-500 hover:border-cyan-200 active:border-cyan-300 text-white w-1/3">
            <Image src={Img} alt="Logo" className="w-72"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem deleniti quam, inventore ea rerum error facere asperiores. Vero nulla fuga voluptates eligendi architecto modi at optio porro, perferendis provident.</p>
            </div>

        </>
    )
}
export default NewsBox;