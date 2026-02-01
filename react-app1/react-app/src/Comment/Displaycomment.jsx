import "./Displaycomment.css"
function Displaycomment({img, user, content}){
    return(
        <div className="comment">
            <div className="comment-user">
                <img src={img}/>
                <p>{user}</p>

            </div>
            <div className="comment-content">
                <small>{content}</small>
            </div>

        </div>
    )
}
export default Displaycomment