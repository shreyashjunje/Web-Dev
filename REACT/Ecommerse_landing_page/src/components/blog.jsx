import "./blog.css"
import vlog1 from "./images/vlog1.webp"
import vlog111 from "./images/vlog111.webp"
function Blog({idxx}){


    let blogarr=[
        {
            imgId:vlog1,
            EditionNo:291,
            Title:"How to water your freaking plants so they don't die after a week.",
            writter: "Mellisa Bella"
        },
        {
            imgId:vlog111,
            EditionNo:282,
            Title:"How to repot a Monstera without killing it and foster its growth.",
            writter: "jessa rowe",
        }
    ]


    return(
        <div className="blog">
            <img src={blogarr[idxx].imgId} alt="" />
            <h4>Edition {blogarr[idxx].EditionNo}</h4>
            <h2>{blogarr[idxx].Title}</h2>
        </div>
    )
}

export default Blog;