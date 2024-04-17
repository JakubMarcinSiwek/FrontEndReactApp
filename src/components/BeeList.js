import React, {useState, useEffect} from 'react';
import data from '../config.json'

const BeeList = (props) => {
    const [bees, setBees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {token, role} = props;

    useEffect(() => {
        fetch(`${data.api}/Bee/api/showBees?pageNumber=${currentPage}&pageSize=5`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setBees(data))
            .catch(error => console.error('Error fetching bees:', error));
    }, [token, role, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h1 style={{ color: 'black' }}>List of Bees</h1>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {bees.map(bee => (
                        <li key={bee.id_Bee} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                            {`ID: ${bee.id_Bee}, Nickname: ${bee.nickname}, Role: ${bee.role}`}
                            <p>nowy feature</p>
                        </li>

                    ))}
                </ul>
                <div>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ marginRight: '10px', backgroundColor: 'orange', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Previous Page
                    </button>
                    <span>{currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={bees.length === 0}
                        style={{ marginLeft: '10px', backgroundColor: 'orange', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </div>

    );
};

export default BeeList;
