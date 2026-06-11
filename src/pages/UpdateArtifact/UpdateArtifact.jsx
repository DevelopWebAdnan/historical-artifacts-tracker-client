import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateArtifact = () => {
    const {data} = useLoaderData();
    console.log(data);
    const { _id, artifact_name, artifact_image, artifact_type, historical_context, created_at, discovered_at, discovered_by, present_location} = data;

    const axiosSecure = useAxiosSecure();

    const handleUpdateArtifact = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedArtifact = Object.fromEntries(formData.entries());
        // newArtifact.like_count = {like_count};
        console.log(updatedArtifact);

        // fetch('http://localhost:5000/historicalArtifacts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newArtifact)
        // })
        //     .then(res => res.json())
        //     .then(data => {

        // axios.post('http://localhost:5000/historicalArtifacts', newArtifact, { withCredentials: true })

        axiosSecure.put(`/historicalArtifact/${_id}`, updatedArtifact)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Artifact has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        // })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-3xl">Update Artifact: {artifact_name}</h2>
                    <form onSubmit={handleUpdateArtifact}>
                        <fieldset className="fieldset">
                            {/* Artifact Name */}
                            <label className="label">Artifact Name</label>
                            <input type="text" name="artifact_name" className="input" placeholder="Artifact Name" defaultValue={artifact_name} required />
                            {/* Artifact Image */}
                            <label className="label">Artifact Image (valid URL)</label>
                            <input type="url" name="artifact_image" className="input" placeholder="Artifact Image (valid URL)" defaultValue={artifact_image} required />
                            {/* Artifact Type */}
                            <label className="label">Artifact Type</label>
                            <select defaultValue={artifact_type} name="artifact_type" className="select" required>
                                <option disabled={true}>Pick an artifact type</option>
                                <option>Tools</option>
                                <option>Weapons</option>
                                <option>Documents</option>
                                <option>Writings</option>
                            </select>
                            {/* Historical Context */}
                            <label className="label">Historical Context</label>
                            <textarea name="historical_context" className="textarea" placeholder="Historical Context" defaultValue={historical_context} required></textarea>
                            {/* Created At */}
                            <label className="label">Created At</label>
                            <input type="text" name="created_at" className="input" placeholder="Created At" defaultValue={created_at} required />
                            {/* Discovered At */}
                            <label className="label">Discovered At</label>
                            <input type="text" name="discovered_at" className="input" placeholder="Discovered At" defaultValue={discovered_at} required />
                            {/* Discovered By */}
                            <label className="label">Discovered By</label>
                            <input type="text" name="discovered_by" className="input" placeholder="Discovered By" defaultValue={discovered_by} required />
                            {/* Present Location */}
                            <label className="label">Present Location</label>
                            <input type="text" name="present_location" className="input" placeholder="Present Location" defaultValue={present_location} required />

                            {/* Submit button */}
                            <button className="btn btn-neutral mt-4">Update Artifact</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateArtifact;