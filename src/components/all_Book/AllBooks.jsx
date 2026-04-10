import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const bookPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-9 gap-6'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;