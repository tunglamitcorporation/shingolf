export default function BottomBar() {
    return (
            <div className="bottom-bar-container">
                <div className="container">
                <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-magnifying-glass bottom-bar-icon"></i>
                    <div className="bottom-bar-title mt-2">Tìm kiếm</div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-chart-simple bottom-bar-icon"></i>
                    <div className="bottom-bar-title mt-2">Bảng xếp hạng</div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-solid fa-clock-rotate-left bottom-bar-icon"></i>
                    <div className="bottom-bar-title mt-2">Lịch sử</div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                    <i class="fa-regular fa-money-bill-trend-up bottom-bar-icon"></i>
                    <div className="bottom-bar-title mt-2">Tỉ giá hôm nay</div>
                    </div>
                </div>
            </div>
        </div>
    )
}