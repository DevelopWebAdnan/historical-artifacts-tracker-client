import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AddArtifacts = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleAddArtifact = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const newArtifact = Object.fromEntries(formData.entries());
        console.log(newArtifact);

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

        axiosSecure.post('/historicalArtifacts', newArtifact)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Artifact has been added",
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
                    <h2 className="text-3xl">Add An Artifact</h2>
                    <form onSubmit={handleAddArtifact}>
                        <fieldset className="fieldset">
                            {/* Artifact Name */}
                            <label className="label">Artifact Name</label>
                            <input type="text" name="artifact_name" className="input" placeholder="Artifact Name" required />
                            {/* Artifact Image */}
                            <label className="label">Artifact Image (valid URL)</label>
                            <input type="url" name="artifact_image" className="input" placeholder="Artifact Image (valid URL)" required />
                            {/* Artifact Type */}
                            <label className="label">Artifact Type</label>
                            <select defaultValue="Pick an artifact type" name="artifact_type" className="select" required>
                                <option disabled={true}>Pick an artifact type</option>
                                <option>Tools</option>
                                <option>Weapons</option>
                                <option>Documents</option>
                                <option>Writings</option>
                            </select>
                            {/* Historical Context */}
                            <label className="label">Historical Context</label>
                            <textarea name="historical_context" className="textarea" placeholder="Historical Context" required></textarea>
                            {/* Created At */}
                            <label className="label">Created At</label>
                            <input type="text" name="created_at" className="input" placeholder="Created At" required />
                            {/* Discovered At */}
                            <label className="label">Discovered At</label>
                            <input type="text" name="discovered_at" className="input" placeholder="Discovered At" required />
                            {/* Discovered By */}
                            <label className="label">Discovered By</label>
                            <input type="text" name="discovered_by" className="input" placeholder="Discovered By" required />
                            {/* Present Location */}
                            <label className="label">Present Location</label>
                            <input type="text" name="present_location" className="input" placeholder="Present Location" required />
                            {/* Artifact adder name */}
                            <label className="label">Artifact adder name</label>
                            <input type="text" defaultValue={user?.displayName} name="adder_name" className="input" placeholder="Artifact adder name" required />

                            {/* Artifact adder email */}
                            <label className="label">Artifact adder email</label>
                            <input type="email" defaultValue={user?.email} name="adder_email" className="input" placeholder="Artifact adder email" required />

                            {/* Submit button */}
                            <button className="btn btn-neutral mt-4">Add Artifact</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArtifacts;