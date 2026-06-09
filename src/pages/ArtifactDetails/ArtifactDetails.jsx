import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ArtifactDetails = () => {
    const { data } = useLoaderData();
    // console.log(data);
    const { _id, artifact_name, like_count, artifact_image, artifact_type, historical_context, created_at, discovered_at, discovered_by, present_location } = data;

    const { user } = useAuth();

    const handleLike = () => {
        const artifact_id = _id;
        // console.log('Clicked on the Like button of the artifact with id: ', artifact_id, 'by:', user);

        const newLikedArtifact = {
            artifact_id,
            liked_by: user?.email
        }

        fetch('https://historical-artifacts-tracker-server-alpha.vercel.app/liked-historical-artifacts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLikedArtifact)
        })
            .then(res => res.json())
            .then(data => {

        // axios.post('https://historical-artifacts-tracker-server-alpha.vercel.app/liked-historical-artifacts', newLikedArtifact, { withCredentials: true })
        //     .then(res => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You like this artifact",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            // })
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{artifact_name}</h1>
                    {/* <div className="badge badge-secondary my-6">{like_count}</div> */}
                    <div className="stats shadow my-5">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">{like_count}</div>
                            {/* <div className="stat-desc">21% more than last month</div> */}
                        </div>
                    </div>
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
                                {/* <button className="btn btn-primary">Like</button> */}
                                <button onClick={handleLike} className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                                    Like
                                </button>
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