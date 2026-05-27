import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyArtifacts = () => {
    const { user } = useAuth();
    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/historicalArtifacts?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setArtifacts(data)
            })
    }, [user.email])
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            artifacts.map((artifact) => <tr>
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
                                    <button className="btn btn-ghost btn-xs">E</button>
                                </th>
                                <th><button className="btn btn-ghost btn-xs">X</button></th>
                            </tr>)
                        }
                    </tbody>

                    <tfoot>
                        <tr>
                            {/* <th></th> */}
                            <th>Artifact Name</th>
                            <th>Discovered At, By</th>
                            <th>Created At</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyArtifacts;