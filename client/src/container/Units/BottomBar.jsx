import {Link} from 'react-router-dom'
export default function BottomBar() {
    return (
            <div className="bottom-bar-container container">
                <div className="d-flex align-items-center justify-content-between">
                <Link to ='/' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <i class="fa-solid fa-home bottom-bar-icon"></i>
                    Trang Chủ
                    </div>
                    </Link>
                    <Link to ='/search' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-magnifying-glass bottom-bar-icon"></i>
                    Tìm kiếm
                    </div>
                    </Link>
                    <Link to ='/rate' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-chart-simple bottom-bar-icon"></i>
                    Bảng xếp hạng
                    </div>
                    </Link>
                    <Link to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-clock-rotate-left bottom-bar-icon"></i>
                   Lịch sử
                    </div>
                    </Link>
                    <Link to ='' className="bottom-bar-title mt-2" style={{textDecoration:'none'}}>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-regular fa-money-bill-trend-up bottom-bar-icon"></i>
                    Bảng giá
                    </div>
                    </Link>
                </div>
            </div>
    )
}