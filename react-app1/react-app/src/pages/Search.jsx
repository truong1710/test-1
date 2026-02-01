import Slide from "./Slide"
import "./Search.css"
function Search(){
    return(
        <>
            <div>
                <Slide />
            </div>
            <div>

                <label>Search</label>
                <form>
                    <input type="search" placeholder="Search"/>
                </form>
            </div>
            <div>
                <label>Type</label>
                <ul className="type_item">
                    <li className="item"><button>Chùa Một Cột</button></li>
                    <li className="item"><button>Công Viên Thống Nhất</button></li>
                    <li className="item"><button>Bảo Tàng Quân Sự</button></li>
                    <li className="item"><button>Quán Ăn Tự Do</button></li>
                    <li className="item"><button>Quán Cà Phê Giảng</button></li>
                    <li className="item"><button>Quán Karaoke Sunny Royal </button></li>
                    <li className="item"><button>Quán Cloud Sky Bar</button></li>
                </ul>
            </div>

            <div>
                
            </div>
            
        </>
    )
}
export default Search