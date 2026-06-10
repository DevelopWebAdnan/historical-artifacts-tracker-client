import { useEffect, useState } from "react";
import FeaturedArtifactCard from "./FeaturedArtifactCard";


const FeaturedArtifacts = () => {

    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/historicalArtifacts")
            .then(res => res.json())
            .then(data => {
                setArtifacts(data)
            });
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    artifacts.map(artifact => <FeaturedArtifactCard
                        key={artifact._id}
                        artifact={artifact}
                    ></FeaturedArtifactCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedArtifacts;