import React from "react";

const Landing = () => {

    return (
        <div className='container fluidjustify-content-center'>

            <div className='container'>
                <div className='row'>
                <div className='col-12'>
                    <h4> Welcome to the Google Books Search Page! </h4>
                    <br></br>
                    <p>Click either button below to search for your favorite books</p>
                    <p>If you find a book that you like, save it to your database for tracking!</p>
                </div>
                </div>
            </div>
            <div className='container' >
                <div className='col-4  justify-content-center'>
                    <a href={"/search"}> {" "} <button className=" btn btn-success m-2"> SEARCH BOOKS </button>{" "} </a>
                    <a href={"/saved"}> {" "} <button className=" btn btn-success m-2"> REVIEW SAVED </button>{" "} </a>
                </div>
            </div>

        </div>
    );
};


export default Landing;