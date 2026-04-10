
import { BookContext } from '../../context/BookContextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBookList from '../../components/book_list/ReadBookList';
import WishBookList from '../../components/book_list/WishBookList';
import { useState } from 'react';

const Books = () => {
    const [sortingType,setSortingType]=useState("");
    console.log(sortingType)

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center items-center mt-8'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn bg-[#0078d7] text-white m-1">Sort By {sortingType.length== 0?"":sortingType } ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType("pages")}><a>Pages</a></li>
                        <li onClick={() => setSortingType("rating")}><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <div className='mt-14'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <ReadBookList sortingType={sortingType} />
                    </TabPanel>
                    <TabPanel>
                        <WishBookList sortingType={sortingType} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Books;