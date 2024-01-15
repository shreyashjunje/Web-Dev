import './vlogDiv.css';

import Blog from "./blog.jsx";


function BlogDiv(){
   
    return (
        <div className="blog_main_div">
            <Blog idxx={0}/>
            <Blog idxx={1}/>
        </div>
    )
}

export default BlogDiv; 