import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const LikedArtifacts = () => {

    const { user } = useAuth();
    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {

        // fetch(`http://localhost:5000/liked-historical-artifact?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setArtifacts(data))

        axios.get(`http://localhost:5000/liked-historical-artifact?email=${user.email}`, { withCredentials: true })
            .then(res => setArtifacts(res.data))

    }, [user.email])

    return (
        <div>
            <h2 className="text-3xl">My likings: {artifacts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Artifact Name</th>
                            <th>Artifact Type</th>
                            <th>Like Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            artifacts.map((artifact, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{artifact.artifact_name}</td>
                                <td>{artifact.artifact_type}</td>
                                <td>{artifact.like_count}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LikedArtifacts;