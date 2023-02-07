import { Link } from "react-router-dom";

const CTAbtn = ({ text, link }) => {
    return (
        <Link to={link}>
            <button className="bg-white px-1 py-3 border-2 border-primary rounded-lg">
                <span className={`px-8 py-2 bg-primary text-white rounded hover:bg-transparent hover:text-primary transition-colors`}>{text}</span>
            </button>
        </Link>
    )

}

export default CTAbtn