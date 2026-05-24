import { useLoaderData } from "react-router-dom";

const ArtifactDetails = () => {
    const { artifact_name, like_count, artifact_image, artifact_type, historical_context, created_at, discovered_at, discovered_by, present_location } = useLoaderData();

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{artifact_name}</h1>
                    <div className="badge badge-secondary my-6">{like_count}</div>
                    <div className="card">
                        <figure>
                            <img
                            className="w-2xl"
                                src={artifact_image}
                                alt="artifact image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Artifact Type: {artifact_type}</h2>
                            <p>Historical Context: {historical_context}</p>
                            <p>Created At: {created_at}</p>
                            <p>Discovered At: {discovered_at}</p>
                            <p>Discovered By: {discovered_by}</p>
                            <p>Present Location: {present_location}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;