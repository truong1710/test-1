import "./Card.css"
function Card({img, name}){
    return(
        <div id="menu-card">
            <div className="card_anh">
                <img src={img} alt={name} />
            </div>
            <div className="card_title">
                <p>{name}</p>
            </div>
        </div>
    )
}
export default Card