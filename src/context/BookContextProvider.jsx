import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext()

const BookContextProvider = ({children}) => {
    const [readList,setReadList] = useState(() =>getAllReadListFromLocalDB());
    const [wishList,setWishList] = useState(() =>getAllWishListFromLocalDB())
    
    const handleMarkAsRead =(currentBook)=>{
        addReadListToLocalDB(currentBook)
        const existReadBook = readList.find(book=>book && book.bookId === currentBook.bookId)

        if(existReadBook){
            toast.error("Book is Already in Read list ",{theme: "colored"})
        }else{
            setReadList([...readList,currentBook]);
            toast.success(`${currentBook.bookName} successfully Added to Read list`,{theme: "dark"})
        }

    }
    const handleWishlist =(currentBook)=>{
        addWishListToLocalDB(currentBook);
        const isExistReadBook = readList.find(book => book && book.bookId === currentBook.bookId);
        if(isExistReadBook){
            toast.error("Book is already in Read list",{theme: "colored"})
            return;
        }

        const existWishlist = wishList.find(book=>book && book.bookId === currentBook.bookId)

        if(existWishlist){
            toast.error("Book is Already in Wish List ",{theme: "colored"})
        }else{
            setWishList([...wishList,currentBook]);
            toast.success(`${currentBook.bookName} successfully Added to Wish List`,{theme: "dark"})
        }

    }

    const data = {
        handleMarkAsRead,
        readList,
        setReadList,
        handleWishlist,
        wishList,
        setWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookContextProvider;