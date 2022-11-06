import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogData from '../../blog-data.json';
import BuggyCounter from "../../utils/buggy-counter";
import ErrorBoundary from "../../utils/error-boundary";


const SinglePostScreen = () => {

    const params = useParams();
    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        console.log(params);
        const currentPost = blogData.find((post) => post.id === parseInt(params.slug));

        document.title = currentPost.title;
        setPostDetails(currentPost);
    }, []);


    return (
        <div className="p-20">
            <h2 className="mb-5 text-xl">This is the Blog page for <i>{postDetails.title}</i></h2>
            <p>
                {postDetails.content}
            </p>

            <h1 className="mt-20">Error boundary component is wrapped to the button counter below;</h1>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
}

export default SinglePostScreen;