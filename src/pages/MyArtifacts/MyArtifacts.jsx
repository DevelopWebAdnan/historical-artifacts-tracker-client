import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const MyArtifacts = () => {
    const { user } = useAuth();
    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleDelete = id => {
        console.log('delete it', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed)

                // fetch(`http://localhost:5000/historicalArtifact/${id}`, {
                //     method: 'DELETE',
                // })
                axiosSecure.delete(`http://localhost:5000/historicalArtifact/${id}`)
                    // .then(res => res.json())
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your historical artifact has been deleted.",
                                icon: "success"
                            });
                            const remaining = artifacts.filter(artifact => artifact._id !== id)
                            setArtifacts(remaining);
                            navigate("/allArtifacts");
                        }
                    })
        });
    }

    // const data = useLoaderData();
    // console.log(data);
    // const { _id, artifact_name, like_count, artifact_image, artifact_type, historical_context, created_at, discovered_at, discovered_by, present_location } = data;


    useEffect(() => {
        // fetch(`http://localhost:5000/historicalArtifacts/${user.email}`)
        // fetch(`http://localhost:5000/myHistoricalArtifacts/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setArtifacts(data)
        //     })

        // axios.get(`http://localhost:5000/historicalArtifacts?email=${user.email}`, { withCredentials: true })
        //     .then(res => setArtifacts(res.data))

        // axiosSecure.get(`/historicalArtifacts?email=${user.email}`)
        axiosSecure.get(`/myHistoricalArtifacts/${user?.email}`)
            .then(res => setArtifacts(res.data))
    }, [axiosSecure, user.email])
    return (
        <div>
            <h2 className="text-3xl">My Artifacts: {artifacts.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Artifact Name</th>
                            <th>Discovered At, By</th>
                            <th>Created At</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            artifacts.map((artifact) => <tr key={artifact._id}>
                                {/* <th>{index + 1}</th> */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={artifact.artifact_image}
                                                    alt="Artifact Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{artifact.artifact_name}</div>
                                            <div className="text-sm opacity-50">{artifact.artifact_type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {artifact.discovered_at}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{artifact.discovered_by}</span>
                                </td>
                                <td>{artifact.created_at}</td>
                                <th>
                                    <Link to={`/updateArtifact/${artifact._id}`}>
                                        <button className="btn btn-ghost btn-xs">E</button>
                                    </Link>
                                </th>
                                <th><button onClick={() => handleDelete(artifact._id)} className="btn btn-ghost btn-xs bg-orange-500">X</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArtifacts;