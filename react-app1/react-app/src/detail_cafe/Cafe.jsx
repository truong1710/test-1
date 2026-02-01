import Card from "../Card"
import an from "../assets/an_uong.jpg";
import "./Cafe.css"
import Facebook from "../icon/facebook.png"
import cafe from "../json/cafe.json"
import Comment from "../Comment/Comment";
import Detailcomment from "../Comment/Displaycomment"
import datacomment from "../json/comment.json"
function Cafe({ img, name }) {
    return (
        <div className="container">
            <div className="cafe-detail">
                <div className="header-cafedetail">
                    <h3 className="title-cafedetail">CàPhê/PhòngTrà</h3>
                    <div className="header1-cafedetail">
                        <div className="image-cafedetail">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboYS_GHRhkgjpRVEEuHzNHFZ-iudTFVC5Cg&s" />
                            <img src="https://vietbis.vn/Image/Picture/Hanoi/cafe-giang-ha-noi.jpg" />
                            <img src="https://mia.vn/media/uploads/blog-du-lich/ca-phe-giang-va-cau-chuyen-thuong-hieu-vuot-qua-bao-thang-tram-1640736968.jpg" />
                            <img src="https://lyoncoffee.com.vn/wp-content/uploads/cafe-giang-ha-noi-6.jpg" />
                        </div>

                        <div className="content-cafedetail">
                            <h3>CAFE GIẢNG</h3>
                            <p><b>Mô Tả:</b> Cà phê Giảng là một trong những quán cà phê lâu đời và nổi tiếng nhất Hà Nội, gắn liền với văn hóa cà phê trứng đặc trưng của Thủ đô.Không gian quán mang đậm nét cổ kính và giản dị. Quán nằm trong một con ngõ nhỏ, không quá rộng, với kiến trúc cũ, tường vàng, bàn ghế gỗ đơn giản.Đồ uống nổi bật nhất của quán là cà phê trứng – sự kết hợp độc đáo giữa cà phê đen đậm, lòng đỏ trứng gà đánh bông cùng đường và sữa. Lớp trứng mịn, béo, thơm, nóng nhẹ, khi uống hòa quyện với vị đắng của cà phê tạo nên hương vị rất riêng, khó quên.</p>
                            <p><b>Giá TB:</b> 50k</p>
                            <p><b>Thời Gian: </b>7:00 - 22:00</p>
                            <p><b>Địa Chỉ: </b>39 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội, Việt Nam</p>
                            <p><b>Tag:</b><span className="tag">#cafe#cafegiang</span></p>
                            <p><b>Rating: </b>⭐⭐⭐⭐⭐</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="button_share">
                <img src={Facebook} className="icon" />
                <button>Share</button>
            </div>

            <div className="menu">
                <h3>Mennu</h3>
                <div className="menu-cafe">
                    <h5>Best seller</h5>
                    <div className="menu-best-seller">
                        {cafe
                            .filter(item => item.type === "best seller")
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    name={item.name}
                                    img={item.image}
                                />
                            ))}
                    </div>

                    <h5>Đồ Uống</h5>
                    <div className="menu-do-uong">
                        {cafe
                            .filter(item => item.type === "đồ uống")
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    name={item.name}
                                    img={item.image}
                                />
                            ))
                        }

                    </div>

                    <h5>Đồ Ăn</h5>
                    <div className="menu-do-uong">
                        {cafe
                            .filter(item => item.type === "đồ ăn")
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    name={item.name}
                                    img={item.image}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>


            <div className="location-cafe">
                <h3>Location</h3>
                <div className="location-map">
                     <iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
                </div>
            </div>


            <div className="comment-cafe">
                <h3>Comment</h3>
                <div className="comment">
                    <Comment />
                </div>
                <div className="display-comment">
                    {datacomment.map((item, index)=>(
                        <Detailcomment
                            key={index}
                            img={item.image}
                            user={item.user}
                            content={item.content}
                        />
                    ))
                    
                    }
                </div>
                
            </div>

            <div className="detail-contact">
                <div>
                    <p><b>Thông Tin Liên Lạc</b></p>
                    <ul>
                        <li>Facebook:</li>
                        <li>Zalo</li>
                        <li>Tel:</li>
                    </ul>
                </div>
                <div>
                    <p><b>Các Địa Điểm Khác</b></p>
                    <ul>
                        <li>Đi Chơi</li>
                        <li>Ăn Uống</li>
                        <li>CaFe</li>
                        <li>Giải Trí</li>
                        <li>Văn Hóa</li>
                    </ul>
                </div>
                <div>
                    <p><b>Liên Hệ Chúng tôi</b></p>
                    <ul>
                        <li><b>Facebook:</b></li>
                        <li><b>Tel:</b></li>


                    </ul>
                </div>
            </div>


        </div>
    )
}
export default Cafe