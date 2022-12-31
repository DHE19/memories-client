import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import { IQuerySearch } from '../../type';
import { useNavigate } from 'react-router-dom';
import Chip from './Chip';


interface IProps{
    setQuery(value:IQuerySearch):void;
}
const Search:React.FC<IProps> = ({setQuery}) => {
    const [search, setSearch] = useState('');
    const [tagsCreator, setTagsCreator] = useState('')
    const [tags, setTags] = useState<string[]>([]);
    const navigate = useNavigate();

    const searchPost = () => {
            if(search.trim() || tags){
                setQuery({search,tags:tags.join(',')});
                navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
            }
    }
    const handleKeyPress = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            searchPost();
    }


    const handleKeyPressCreator = (event: React.KeyboardEvent<HTMLInputElement>) => {


        
        if (event.keyCode === 32) {            
            const tagToAdd  = tagsCreator.trim();
            if(tagToAdd === '') return;
            setTags(tags => [...tags,...tagToAdd.split(' ') ]);
            setTagsCreator('');
        }
    }


    const handleRemoveTag = (name:string) => setTags(tags => tags.filter(t => t !== name))
    return (
        <div className="mb-3 w-[96%] md:w-[50%] lg:w-[99%] xl:w-[95%] mx-auto shadow-sm">
            <form 
            onSubmit={handleKeyPress}
            className="bg-white rounded-lg p-4 flex flex-col gap-y-3">
                    <input 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text" 
                    placeholder="Title" 
                    className="py-3 border-b-[1px] border-blue-400 focus:border-b-2 transition-all duration-200 focus:outline-none text-slate-700" />

                    <input 
                    onChange={(e) => setTagsCreator(e.target.value)}
                    value={tagsCreator}
                    onKeyDown={handleKeyPressCreator}
                    type="text" 
                    placeholder="Tags [tap space to set the tag]" 
                    className="py-3 border-b-[1px] border-blue-400 focus:border-b-2 transition-all duration-200 focus:outline-none text-slate-700" />
            <div className='w-full flex-wrap '>
               {tags.map((tag,i) => <Chip text={tag} key={i} remove = {handleRemoveTag}/>)}
            </div>

            <button
            type='submit' 
            className="bg-blue-500 focus:outline-none  hover:bg-blue-600 flex justify-center py-3 rounded-lg text-slate-200 gap-2 text-lg items-center">
                <span>Search</span> 
                <MagnifyingGlassIcon className='h-5 w-5 '/>
            </button>
            </form>
        </div>
    )
}

export default Search
