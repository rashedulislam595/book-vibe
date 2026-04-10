import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContextProvider';
import BookListCard from '../UI/BookListCard';

const WishBookList = ({sortingType}) => {
    const {wishList} = useContext(BookContext)
    const [filterWishList,setFilterWishList] = useState(wishList);

    useEffect(()=>{
        if(sortingType){
            if(sortingType === "pages"){
                const sortedData = [...wishList].sort((a,b)=>a.totalPages - b.totalPages);
                setFilterWishList(sortedData)

            }else if(sortingType === "rating"){
                const sortedData = [...wishList].sort((a,b) => a.rating - b.rating);
                setFilterWishList(sortedData)
            }
        }
    },[sortingType,wishList])

    return (
        <div className='space-y-5 mb-10'>
            {
                filterWishList.length == 0?
                <div className='py-32 bg-[#e2e0e080] grid justify-center items-center rounded-2xl'>
                    <h2 className='text-[#13131380] font-bold text-4xl'>Book Not Found!!</h2>
                </div>:
                filterWishList.map((book,ind) => <BookListCard key={ind} book={book} />)
            }
        </div>
    );
};

export default WishBookList;