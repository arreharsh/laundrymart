import React from "react";


const Error = () => {
    return (
        <>
            <title>Error 404 - Laundry Mart</title>
            <section >
                <div >
                    <div >
                        <div>
                            <div className="text-center" style={{ padding: '80px 0', marginTop: '100px' }}>
                                <h1>
                                    Error 404
                                </h1>
                                <h2 >
                                    Oops! That page can’t be found
                                </h2>
                                <p className="bold" style={{ fontSize: '20px' }}>
                                    The page you are looking for it maybe deleted or doesn't exist.
                                </p>
                                <a
                                    href="/home"
                                    className="btn"
                                >
                                    Go To Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
};

export default Error;
