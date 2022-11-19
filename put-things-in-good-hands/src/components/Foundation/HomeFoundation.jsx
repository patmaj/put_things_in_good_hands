import Decoration from "../assets/Decoration.svg";
import React, {useState} from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import FoundationButton from "./FoundationButton";

const HomeFoundation = () => {
    const [selected, setSelected] = useState("foundation")
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

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

    return (
        <section className="foundation">
            <h1 className="foundation__title">Komu pomagamy?</h1>
            <img className="decor" src={Decoration} alt="" />
            <div className="foundation_buttons">
                <button></button>
                <button></button>
                <button></button>
            </div>
            <Posts data={} />
            <div className="foundation__pagination">
                <Pagination></Pagination>
            </div>

        </section>
    );
}

export default HomeFoundation;