import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Form from "../components/Forms/Form"

import Posts from "../components/Posts/Posts"
import { getPosts } from "../redux/actions/post";


const HomePage = () => {
    const dispatch:Dispatch<any> = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
       <>
           

            <main className='grid grid-cols-1 lg:grid-cols-10 gap-3 gap-y-10 mt-6 lg:px-2 xl:px-4'>
                <div className='order-2 lg:order-1 lg:col-span-6'>
                    <Posts/>
                </div>
                <div className='order-1 lg:order-2 lg:col-span-4'>
                    <Form/>
                </div>
            </main>
       </>
    )
}

export default HomePage
