import "./Khung.css"
function Khung({ img, name, address }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt={name} />
            </div>

            <div className="card-content">
                <h4 className="card-title">{name}</h4>
                <small className="card-address">{address}</small>
            </div>
        </div>
    );
}

export default Khung;
