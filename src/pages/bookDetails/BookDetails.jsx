import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContextProvider';

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const findBook = books.find(book => book.bookId == bookId);

    const {handleMarkAsRead,handleWishlist} = useContext(BookContext)


    const { image, bookName, author, review, tags, category, totalPages,yearOfPublishing,publisher,rating } = findBook

    const tag = tags.map((tag, ind) => <h5 key={ind} className="badge text-[#23BE0A] bg-[#23BE0A05] font-bold mr-5">#{tag}</h5>);
   

    return (
        <div className="w-11/12 mx-auto bg-base-100 shadow-sm mt-10  p-5 md:flex gap-8 ">
            <figure className='p-20 rounded-2xl bg-[#13131310] mb-5 flex justify-center items-center'>
                <img
                    className='h-96'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="md:w-[60%] space-y-6">
                <div>
                    <h2 className="card-title text-4xl font-bold mb-1">{bookName}</h2>
                    <p className='text-xl font-medium text-[#13131380]'>{author}</p>
                </div>
                <div className='space-y-2'>
                    <hr className='text-[#13131315]' />
                    <p className='text-xl font-medium text-[#13131380]'>{category}</p>
                    <hr className='text-[#13131315]' />
                </div>
                <p className='font-bold'>Review: <span className='text-[#13131370]'>{review}</span> </p>
                <div>
                    <p><span className='font-bold'>Tags</span> {tag}</p>
                </div>
                <hr className='text-[#13131315]' />

                <div className='flex gap-8 md:gap-14'>
                    <div className='space-y-2'>
                        <p className='text-[#13131370]'>Number of Pages: </p>
                        <p className='text-[#13131370]'>Publisher: </p>
                        <p className='text-[#13131370]'>Year of Publishing:</p>
                        <p className='text-[#13131370]'>Rating:</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-semibold text-[#131313] ml-14'>{totalPages}</p>
                        <p className='font-semibold text-[#131313] ml-14'>{publisher}</p>
                        <p className='font-semibold text-[#131313] ml-14'>{yearOfPublishing}</p>
                        <p className='font-semibold text-[#131313] ml-14'>{rating}</p>
                        
                    </div>

                </div>

                <div className="card-actions gap-4 ">
                    <button onClick={()=>handleMarkAsRead(findBook)} className='btn border border-[#13131330]'>Mark As Read</button>
                    <button onClick={()=>handleWishlist(findBook)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;