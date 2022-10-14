import React from "react";
import Topbar from "./TopBar";
import Footer from "./Footer";
import ContentRowTop from "./ContentRowTop";
import ContentRowMovies from "./ContentRowMovies";


function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">

                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Topbar/>
                    <ContentRowMovies/>

                    <ContentRowTop/>
                </div>
                {/*<!-- End of MainContent -->*/}

            <Footer/>

            </div>
            {/*<!-- End of Content Wrapper -->*/}
        </React.Fragment>
    )
}



export default ContentWrapper;