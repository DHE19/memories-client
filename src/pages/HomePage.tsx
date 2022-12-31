import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import Pagination from "../components/Auth/components/Pagination/Pagination";
import Form from "../components/Forms/Form"

import Posts from "../components/Posts/Posts"
import Search from "../components/Search/Search";
import { getPosts, getPostsBySearch } from "../redux/actions/post";
import { IQuerySearch } from "../type";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const HomePage = () => {

    const query = useQuery();
    const dispatch:Dispatch<any> = useDispatch();
    const searchquery = query.get('searchQuery');
    const searchtags = query.get('tags');
    let pageNow = new URLSearchParams(window.location.search).get('page') ?? 1;
    let currentPage:number = 1;

    const handleSearch = (query:IQuerySearch) =>{
        dispatch(getPostsBySearch(query));
    }

    //parcialmente resulto
    const handleNextPage = () =>{
        pageNow = new URLSearchParams(window.location.search).get('page') ?? 1;
        if(Number(pageNow) !== currentPage){
            dispatch(getPosts(Number(pageNow)));
           currentPage = Number(pageNow);
        }
    }
    
    useEffect(() => {
        

        if(searchquery || searchtags) dispatch(getPostsBySearch({search:searchquery ?? '',tags:searchtags ?? ''}));
        else  dispatch(getPosts(Number(pageNow))); 
            
        
    }, []);
    
    return (
       <>
            <main className='grid grid-cols-1 lg:grid-cols-10 gap-3 gap-y-10 mt-6 lg:px-2 xl:px-4'>
                <div className='order-2 lg:order-1 lg:col-span-7'>
                    <Posts/>
                </div>
                <div className='order-1 lg:order-2 lg:col-span-3 flex flex-col'>
                    <Search setQuery={handleSearch}/>
                    <Form/>
                    {
                        !searchquery && <Pagination updatePage={handleNextPage}/>
                    }
                </div>
            </main>
       </>
    )
}

export default HomePage
