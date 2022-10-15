
import React from 'react';
import SmallCard from './SmallCard';

let cardProps =[
    {
        title:'Movies in Data Base',
        quantity:"21",
        icon:"fa-film",
        color:"primary"
    },
    {
        title:' Total awards',
        quantity:"79",
        icon:"fa-award",
        color:"success"
    },
    {
        title:'Actors quantity',
        quantity:"49",
        icon:"fa-user",
        color:"warning"
    }
]


function ContentRowMovies() {
    return (
        <React.Fragment>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">

                {/*<!-- Movies in Data Base -->*/}
                    
                {cardProps.map((item, i) => {
                    return <SmallCard key={i} {...item}  />
                })}


            </div>
            {/*<!-- End movies in Data Base -->*/}

        </React.Fragment>
    );
}

export default ContentRowMovies;







