import React, { useContext, useEffect, useState } from 'react';
import BookListCard from '../UI/BookListCard';
import { BookContext } from '../../context/BookContextProvider';

const ReadBookList = ({sortingType}) => {
    const {readList} =useContext(BookContext)
    const [filterList,setFilterList] = useState(readList) 

    useEffect(()=>{
        if(sortingType){
            if(sortingType ==="pages"){
                const sortedData = [...readList].sort((a,b) => a.totalPages - b.totalPages);
                setFilterList(sortedData)
            }else if(sortingType === "rating"){
                const sortedData = [...readList].sort((a,b) => a.rating -b.rating);
                setFilterList(sortedData)
            }
        }

    },[sortingType,readList])

    return (
        <div className='space-y-5 mb-10'>
            {
                filterList.length == 0?
                <div className='py-32 bg-[#e2e0e080] grid justify-center items-center rounded-2xl'>
                    <h2 className='text-[#13131380] font-bold text-4xl'>Book Not Found!!</h2>
                </div>:
                filterList.map((book,ind)=><BookListCard key={ind} book={book}/>)
            }
        </div>
    );
};

export default ReadBookList;