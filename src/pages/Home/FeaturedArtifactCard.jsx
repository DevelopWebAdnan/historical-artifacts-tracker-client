

const FeaturedArtifactCard = ({ artifact }) => {

    const { artifact_image, artifact_name, historical_context, like_count } = artifact;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    className="w-60 h-60"
                    src={artifact_image}
                    alt="artifact image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{artifact_name}</h2>
                <div className="badge badge-secondary">{like_count}</div>
                <p>{historical_context}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArtifactCard;