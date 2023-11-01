import React, { useEffect, useState } from 'react';


const Pagination = ({ productData, page, setPage, setFilterData, sort }) => {
    const totalPages = Math.ceil(productData.length / 3);

    const handlePageClick = (newPage) => {
        setPage(newPage);
    };

    const handlePaginationData = () => {
        const startIndex = (page - 1) * 3;
        const endIndex = page * 3;
        const dataForPage = productData.slice(startIndex, endIndex);
      
        let sortedData;
      
        if (sort === "l-h") {
          sortedData = dataForPage.slice().sort((a, b) => a.price - b.price);
        } else {
          sortedData = dataForPage.slice().sort((a, b) => b.price - a.price);
        }
      
        setFilterData(sortedData);
      };
      


    useEffect(() => {
        handlePaginationData();
    }, [page]);

    return (
        <div style={{ width: "75vw", overflow: "scroll" }}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li style={{ cursor: "pointer" }} className="page-item">
                        <a onClick={() => { handlePageClick(page > 1 ? page - 1 : 1); }} className="page-link">
                            Previous
                        </a>
                    </li>
                    {Array.from({ length: totalPages }).map((e, i) => (
                        <li style={{ cursor: "pointer" }} className="page-item" key={i}>
                            <a onClick={() => { handlePageClick(i + 1) }} className={`page-link ${page === i + 1 ? 'bg-dark text-white' : ''}`}>
                                {i + 1}
                            </a>
                        </li>
                    ))}
                    <li style={{ cursor: "pointer" }} className="page-item">
                        <a onClick={() => { handlePageClick(page < totalPages ? page + 1 : totalPages); }} className="page-link">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination