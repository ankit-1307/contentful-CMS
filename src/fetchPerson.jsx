import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space: "z0k54fsm7p4w",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState([]);
    const fetchProjects = async () => {
        try {
            const response = await client.getEntries({
                content_type: "projects",
            });
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img };
            });
            setIsLoading(false);
            setProject(projects);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProjects();
    }, []);
    return { isLoading, project };
};
