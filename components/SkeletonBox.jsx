import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const SkeletonBox = ({width}) =>{
    return(
        <>
           <Skeleton count={1}  height={100} width={width} highlightColor="#D3D3D3" />
           <Skeleton count={1} width={width} className='mt-4'/>
           <Skeleton count={1} width={width}/>
           <Skeleton count={1} width={width}/>
         
        </>
    )
}
export default SkeletonBox;