import React, { useEffect, useState } from 'react';
import category from "../data.js";
import Card from './Card.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAsync, getFilterDataAsync } from '../redux/slice.js';
import Pagination from './Pagination.jsx';
import Loading from './Loading.jsx';

const ProductList = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.data.data);
    const loading = useSelector((state) => state.data.loading);

    const [filter, setFilter] = useState({ category: [] });
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [filterData, setFilterData] = useState([]);

    console.log(sort)

    const handleFilter = (e) => {
        const categoryValue = e.target.value;

        if (!filter.category.includes(categoryValue)) {
            // Add the category to the array
            setFilter({ ...filter, category: [...filter.category, categoryValue] });
        } else {
            // Remove the category from the array
            const updatedCategories = filter.category.filter((category) => category !== categoryValue);
            setFilter({ ...filter, category: updatedCategories });

        }
    };

    const handlePaginationData = () => {
        const tempData = productData
        const startIndex = (page - 1) * 3;
        const endIndex = page * 3;

        const dataForPage = tempData.slice(startIndex, endIndex);
        setFilterData(dataForPage)
    }

    const handleSort = (e) => {
        if (sort !== e.target.value) {
            setSort(e.target.value);
            if (sort === "l-h") {
                const LowToHign = filterData.slice().sort((a, b) => b.price - a.price);
                setFilterData(LowToHign);
            }
            else {
                const HighToLow = filterData.slice().sort((a, b) => a.price - b.price);
                setFilterData(HighToLow);

            }
        } 

    }


    useEffect(() => {
        dispatch(getDataAsync());
       
    }, []);
    useEffect(() => {
      
        handlePaginationData()
    }, [productData])

    useEffect(() => {
        if (filter.category.length > 0) {
            setPage(1);
            dispatch(getFilterDataAsync(filter));
        }
        else {
            setPage(1);
            dispatch(getDataAsync());
        }
    }, [filter]);



    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ display: 'flex', flexDirection: "column", width: "22vw", border: "solid black 1px", paddingLeft: "10px" }}>
                    <h2>Category</h2>
                    {category.map((e, i) => <div key={i} style={{ direction: "flex" }}>
                        <input onClick={handleFilter} type="checkbox" value={e.value} />
                        <label className='mx-1'>{e.value}</label>
                    </div>)}

                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                        <h2>SORT</h2>
                        <input onClick={handleSort} style={{ marginLeft: "10px" }} name="sort" type='radio' value="l-h" />
                        <label style={{ marginLeft: "10px" }} >Low To High</label>
                        <input onClick={handleSort} style={{ marginLeft: "10px" }} name="sort" type='radio' value="h-l" />
                        <label style={{ marginLeft: "10px" }} >High To Low</label>
                    </div>
                    {loading && <Loading />}

                    <div className='container row'>
                        {
                            filterData.map((e) =>
                                <Card
                                    key={e._id}
                                    title={e.title}
                                    description={e.description}
                                    img={e.thumbnail}
                                    price={e.price}
                                />
                            )
                        }

                    </div>
                    <Pagination
                        productData={productData}
                        page={page}
                        setPage={setPage}
                        handlePaginationData={handlePaginationData}
                        setFilterData={setFilterData}
                        sort={sort}
                    />
                </div>
            </div>

        </>
    );
};

export default ProductList;
