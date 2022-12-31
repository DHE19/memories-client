import {ArrowRightCircleIcon, ArrowLeftCircleIcon} from '@heroicons/react/24/solid'
import {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../../../redux/reducers';

const rootLink = '/posts?page='



const Pagination = ({updatePage}:{updatePage():void}) => {
    const {numberOfPages, currentPage} = useSelector((state:AppState) => state.posts)
    const [pages, setPages] = useState<Array<React.ReactNode>>([]);

    //
    useEffect(() =>{
        let basicArray = new Array<number>();
        for (let i = 0; i < numberOfPages; i++) basicArray.push(i);

        setPages( basicArray.map((_i,index) => ( 
            <li key={index}>
                <Link 
                onClick={() => setTimeout(updatePage,500)}
                to={`${rootLink}${index+1}`} >
                    <span  
                    className={`pagination-button ${index+1 === currentPage && '!bg-blue-500 !text-white'}`}>
                        {index + 1}
                    </span>
                </Link>
            </li>)));
    },[numberOfPages]);
    
    return (
        <div className=' w-[96%] md:w-[50%] lg:w-[99%] xl:w-[95%] mx-auto shadow-sm'>
            <ul className="flex  justify-between px-4 items-center py-4 bg-white rounded mt-5">
                <li className=' cursor-pointer'>
                    <ArrowLeftCircleIcon className='h-7 w-7 text-blue-500 hover:text-blue-600'/>
                </li>
                <li className='flex gap-2'>
                    {pages}
                </li>
                <li className=' cursor-pointer'>
                    <ArrowRightCircleIcon className='h-7 w-7 text-blue-500 hover:text-blue-600'/>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
