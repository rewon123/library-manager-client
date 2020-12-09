import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../../Components/NavBar/Header';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [dashboardData, setDashboardData] = useState([])


    const deleteRegistration = id => {
        fetch(`https://library-management-rewon.herokuapp.com/deleteRegistration/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
        // console.log('innanillah valo thakis');
        alert('your registration has been cancelled succesfully reload the page to see the result')

    }
    useEffect(() => {
        fetch(`https://library-management-rewon.herokuapp.com/specificRegistration?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setDashboardData(data)
            })
    }, [])
    // console.log(dashboardData);
    return (
        <div className='container'>
            <Header />
            {
                // if statement starts form here
                dashboardData.length > 0 ? <div className='d-flex'>
                    <div className='row'>
                        {
                            dashboardData.map(data =>
                                <div key={data._id} className="card" id='card' style={{ width: '550px', height: '219px', borderRadius: '10px', margin: " 10px 10px " }}>
                                    <div className="container bcontent">
                                        <div className="row no-gutters">
                                            <div className="col-sm-5">
                                                <img src={`data:image/png;base64,${data.forDashboard.image.img}`} className="card-img-top mt-2" style={{ height: '200px' }} alt="..." />
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{ fontWeight: 'bold' }}> {data.forDashboard.bookName}</h5>
                                                    <p className="card-text">{data.forDashboard.releaseDate}</p>
                                                    <div className='text-right'>
                                                        <button className="btn btn-secondary" onClick={() => deleteRegistration(data._id)} style={{ color: '#787878', border: 'none', backgroundColor: '#E3E3E3' }} >cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            )
                        }
                    </div>
                </div>
                    // else statement starts from here
                    :
                    <div> <h1>you have no registration indeed</h1> <img src="https://i.pinimg.com/originals/06/bd/f8/06bdf8ad69ff62062ae7dceb250d8866.gif" style={{width:"150px"}} alt="" /></div>

            }
        </div>
    );
};

export default Dashboard;