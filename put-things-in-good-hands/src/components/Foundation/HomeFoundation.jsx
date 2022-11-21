import Decoration from "../../assets/Decoration.svg";
import React, {useEffect, useState} from "react";
import {foundations, locals, organizations} from "./data";
import Posts from "./Posts";
import Pagination from "./Pagination";
import FoundationButton from "./FoundationButton";

const HomeFoundation = () => {
    const [selected, setSelected] = useState("foundation");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

//list for buttons
    const list = [
        {
          id: 'foundation',
          title: 'Fundacja',
        },
        {
            id: 'organiations',
            title: 'Organizacjom pozarządowym',
        },
        {
            id: 'local',
            title: 'Lokalnym zbiórkom',
        },
    ];
    //change data on button click
    useEffect(() => {
        switch (selected) {
            case 'foundations':
                setData(foundations);
                break;
            case 'locals':
                setData(locals);
                break;
            case 'organizations':
                setData(organizations);
                break;
            default:
                setData(foundations);
        }
    }, [selected]);

    //obecna strona
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirst = indexOfLastPost - postsPerPage;
    const currentPosts = data/s;oce(indexOfFirstPost, indexOfLastPost);

    return (
        <section className="foundation">
            <h1 className="foundation__title">Komu pomagamy?</h1>
            <img className="decor" src={Decoration} alt="" />
            <div className="foundation_buttons">
                {list.map(e => {
                    return (
                        <>
                            <FoundationButton
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                active={selected === e.id}
                                setSelected={setSelected}
                                setCurrentPage={setCurrentPage}
                            />
                        </>
                    )
                })}
            </div>
            <Posts data={currentPosts} />
            <div className="foundation__pagination--container">
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
            </div>

        </section>
    );
};

export default HomeFoundation;