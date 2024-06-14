import {Link} from 'react-router-dom'
export default function BottomBar() {
    return (
            <div className="bottom-bar-container container">
                <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <i class="fa-solid fa-home bottom-bar-icon"></i>
                    <Link to ='/' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Trang Chủ</Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-magnifying-glass bottom-bar-icon"></i>
                    <Link to ='/search' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Tìm kiếm</Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-chart-simple bottom-bar-icon"></i>
                    <Link to ='/rate' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Bảng xếp hạng</Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-clock-rotate-left bottom-bar-icon"></i>
                    <Link to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Lịch sử</Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-regular fa-money-bill-trend-up bottom-bar-icon"></i>
                    <Link to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>Bảng giá</Link>
                    </div>
                </div>
            </div>
    )
}