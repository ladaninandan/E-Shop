import React from "react";
// import './page404.css';
import page404 from "D:/project-react/my-project/src/Componet/img/page404.jpg";

function Page404() {
    return (
        <>
            {/* <h1 className="text-center">Page 404</h1> */}
            <div className="img-fluid text-center">
                <h1>page not found </h1>
                <img src={page404} alt="" style={{
                    width: "200px"
                }} />
            </div>

        </>
    );
}

export default Page404;
