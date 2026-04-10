import React from 'react';
import { Link } from 'react-router';

const BookListCard = ({ book }) => {
    const tag = book.tags.map((tag, ind) => <h5 key={ind} className="badge text-[#23BE0A] bg-[#23BE0A05] font-bold mr-5">#{tag}</h5>);
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card card-side bg-base-100 shadow-md p-5 border border-[#13131320]">
            <figure className='p-12 rounded-2xl bg-[#e2e0e080]'>
                <img className='h-40 '
                    src={book.image}
                    alt={book.bookName} />
            </figure>
            <div className="card-body space-y-4">
                <div>
                    <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
                    <p className='text-[#13131380] font-medium'>{book.author}</p>
                </div>
                <div className='flex'>
                    <p><span className='font-bold'>Tags</span> {tag}</p>
                    <p className='text-[#13131380]'>Year of Publishing: {book.yearOfPublishing}</p>
                </div>
                <div>
                    <p className='text-[#13131360]'>Publisher: {book.publisher}</p>
                    <p className='text-[#13131360]'>Page {book.totalPages}</p>
                </div>
                <hr className='text-[#13131315]' />
                <div className="card-actions gap-3">
                    <button className='py-2.5 px-5 bg-[#328EFF20] text-[#328EFF] rounded-full'>Category: {book.category}</button>
                    <button className='py-2.5 px-5 bg-[#FFAC3320] text-[#FFAC33] rounded-full'>Rating: {book.rating}</button>
                    <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
                </div>
            </div>
        </Link>
    );
};

export default BookListCard;