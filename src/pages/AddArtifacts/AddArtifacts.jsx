

const AddArtifacts = () => {
    return (
        <div>
            <h2 className="text-3xl">Add An Artifact</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            {/* Artifact Name */}
                            <label className="label">Artifact Name</label>
                            <input type="text" name="name" className="input" placeholder="Artifact Name" />
                            {/* Artifact Image */}
                            <label className="label">Artifact Image (valid URL)</label>
                            <input type="url" name="image" className="input" placeholder="Artifact Image (valid URL)" />
                            {/* Artifact Type */}
                            <label className="label">Artifact Type</label>
                            <select defaultValue="Pick an artifact type" className="select">
                                <option disabled={true}>Pick an artifact type</option>
                                <option>Tools</option>
                                <option>Weapons</option>
                                <option>Documents</option>
                                <option>Writings</option>
                            </select>
                            {/* Historical Context */}
                            <label className="label">Historical Context</label>
                            <textarea className="textarea" placeholder="Historical Context"></textarea>
                            {/* Created At */}
                            <label className="label">Created At</label>
                            <input type="text" name="createdAt" className="input" placeholder="Created At" />
                            {/* Discovered At */}
                            <label className="label">Discovered At</label>
                            <input type="text" name="discoveredAt" className="input" placeholder="Discovered At" />
                            {/* Discovered By */}
                            <label className="label">Discovered By</label>
                            <input type="text" name="discoveredBy" className="input" placeholder="Discovered By" />
                            {/* Present Location */}
                            <label className="label">Present Location</label>
                            <input type="text" name="location" className="input" placeholder="Present Location" />

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