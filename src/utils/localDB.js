const getAllReadListFromLocalDB =()=>{
    const allReadList = localStorage.getItem("readList")
    
    if(allReadList) return JSON.parse(allReadList);
    
    return [];
}

const addReadListToLocalDB =(book) =>{
    const allBook = getAllReadListFromLocalDB();
    const isAlreadyExist = allBook.find(bk => bk.bookId === book.bookId);

    if(!isAlreadyExist){
        allBook.push(book);
        localStorage.setItem("readList",JSON.stringify(allBook))
    }
}

// WishList local storage
const getAllWishListFromLocalDB =() =>{
    const allWishList = localStorage.getItem("wishList");

    if(allWishList) return JSON.parse(allWishList);

    return []
}

const addWishListToLocalDB =(book) =>{
    const allBook = getAllWishListFromLocalDB();
    const isAlreadyExist = allBook.find(bk => bk.bookId === book.bookId);
    
    if(!isAlreadyExist){
        allBook.push(book);
        localStorage.setItem("wishList",JSON.stringify(allBook));
    }
}

export {getAllReadListFromLocalDB,addReadListToLocalDB,addWishListToLocalDB,getAllWishListFromLocalDB}