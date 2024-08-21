import {Link} from "react-router-dom"
import dataBaseServices from "../appWrite/Database";


function PostCard({$id, title, featureImage}){
    return(
        <Link>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={dataBaseServices.getFilePreview(featureImage)} alt={title} />
            </div>
            <h2 className="text-xl font-bold">
                {title}
            </h2>
        </div>
        </Link>
    )
}

export default PostCard;