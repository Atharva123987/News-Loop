import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const SkeletonBox = () =>{
    return(
        <>
           <Skeleton count={1}  height={100} />
           <Skeleton count={1}/>
           <Skeleton count={1}/>
         
        </>
    )
}
export default SkeletonBox;