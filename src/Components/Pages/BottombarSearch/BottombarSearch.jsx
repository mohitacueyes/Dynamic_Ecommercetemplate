import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BottombarSearch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const [showSearchResults, setShowSearchResults] = useState(true);
    //--------------------------//
    const handleSearch = async (query) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API}/api/search/${query}`);
            if (response.data.ResponseCode === 1) {
                setSearchResults(response.data.ResponseData || []);
            } else {
                console.error('Error fetching search results:', response.data.ResponseText);
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            handleSearch(searchQuery);
            setShowSearchResults(true); // Show search results when there's input
        } else {
            setSearchResults([]);
            setShowSearchResults(false); // Hide search results when input is empty
        }
    }, [searchQuery]);

    const handleChange = async (e) => {
        const { value } = e.target;
        setSearchQuery(value);
    };

    const handleResultClick = (id, slug) => {
        navigate(`/productdetails/${id}/${slug}`);
        setShowSearchResults(false);
    };


    return (
        <>
            <Container fluid>
                <div className="">
                    <div className="input-group flex-nowrap  pb-xl-0">
                        <input
                            type="text"
                            class="form-control w-100 border-dark border border-2 d-flex d-xl-none d-lg-none d-md-none mt-3"
                            placeholder="Search for Products"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                            value={searchQuery}
                            onChange={handleChange}
                        />
                        <button
                            class="btn btn-dark btn-ecomm border-2 d-flex d-xl-none d-lg-none d-md-none  mt-3"
                            type="button"
                            onClick={handleSearch}
                        >
                            <i className="bx bx-search" />
                        </button>
                    </div>
                    {error && <p>Error: {error}</p>}
                    {showSearchResults && searchResults.length > 0 && (
                        <div className="mt-3" style={{ zIndex: 1 }}>
                            <ul className="bg-white position-absolute  list-unstyled p-3 border rounded" style={{ left: '1%' }} >
                                {searchResults.map((product) => (
                                    <li key={product.id} onClick={() => handleResultClick(product.id, product.slug)}>{product.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Container>
        </>
    )
}

export default BottombarSearch
