import { Link } from "react-router-dom";


const FeaturedArtifactCard = ({ artifact }) => {

    const { _id, artifact_image, artifact_name, historical_context, like_count } = artifact;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="h-60">
                <img
                    className="h-full object-cover"
                    src={artifact_image}
                    alt="artifact image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{artifact_name}</h2>
                <div className="badge badge-secondary">{like_count}</div>
                <p>{historical_context}</p>
                <div className="card-actions justify-end">
                    <Link to={`/historicalArtifacts/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArtifactCard;