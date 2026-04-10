import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    const tag = book.tags.map((tag,ind)=> <div key={ind} className="badge text-[#23BE0A] bg-[#23BE0A05] font-bold mr-5">{tag}</div>);
    
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card border border-[#13131320] bg-base-100 w-96 shadow-sm mb-8 p-4 mx-auto">
            <figure className='py-8 rounded-2xl bg-[#e2e0e080]'>
                <img
                    className='h-40'
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="mt-6 ">
                <div>{tag}</div>
                <h2 className="card-title text-2xl font-bold my-2 line-clamp-1">{book.bookName}</h2>
                <p className='text-[#13131380] font-medium'>{book.author}</p>
                <div className="card-actions flex justify-between border-t border-dashed border-[#13131335] mt-5 pt-5 ">
                    <p className='font-medium text-[#13131380]'>{book.category}</p>
                    <p className='font-medium text-[#13131380] text-lg flex items-center gap-2'>{book.rating} <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;