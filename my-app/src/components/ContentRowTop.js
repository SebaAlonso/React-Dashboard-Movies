import React from "react";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard Movies</h1>
                </div>

            


                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className="row">
                    <LastMovieInDb/>

                    {/*<!-- Genres in DB -->*/}
                    <GenresInDb/>
                </div>
            </div>
            {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    );
}

export default ContentRowTop;
