export default function PricePage() {
    const tablePrice = [
        {
            id:1,
            name:"Sắt(3-9,P)",
            ship: "60,000",
            service:"300,000",
            tax:"10%",
            promotion:"Dưới 10.000.000",
            discount:"0%"
        },
        {
            id:2,
            name:"Wedge",
            ship: "75,000",
            service:"400,000",
            tax:"10%",
            promotion:"Trên 10.000.000",
            discount:"10%"
        },
        {
            id:3,
            name:"Driver",
            ship: "100,000",
            service:"500,000",
            tax:"10%",
            promotion:"Trên 20.000.000",
            discount:"20%"
        },
        {
            id:4,
            name:"Gỗ",
            ship: "90,000",
            service:"450,000",
            tax:"10%",
            promotion:"Trên 40.000.000",
            discount:"40%"
        },
        {
            id:5,
            name:"Putt",
            ship: "80,000",
            service:"300,000",
            tax:"10%",
            promotion:"Trên 80.000.000",
            discount:"50%"
        },
        {
            id:6,
            name:"Bóng",
            ship: "80,000",
            service:"50,000",
            tax:"10%",
            promotion:"Trên 100.000.000",
            discount:"60%"
        },
        {
            id:7,
            name:"Máy bắn khoảng cách	",
            ship: "100,000",
            service:"100,000",
            tax:"10%",
            promotion:"0",
            discount:"0%"
        },
        {
            id:8,
            name:"Giày golf	",
            ship: "100,000",
            service:"100,000",
            tax:"10%",
            promotion:"0",
            discount:"0%"
        },
        {
            id:9,
            name:"Shaft gậy",
            ship: "50,000",
            service:"300,000",
            tax:"10%",
            promotion:"0",
            discount:"0%"
        },
        {
            id:10,
            name:"Quần áo,túi gậy, túi xách, găng tay…	",
            ship: "Tính theo cân 180.000/kg	",
            service:"50.000/ món",
            tax:"10%",
            promotion:"0",
            discount:"0%"
        },
    ]
    return(
        <>
        <div className="reservation__content" style ={{backgroundImage: 'url(/webp/golf-bg.jpg)'}}>
              <h1>BẢNG GIÁ</h1>
            </div>
            <div className="container">
            <table className="price-table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Loại sản phẩm</th>
                    <th>Phí vận chuyển</th>
                    <th>Phí dịch vụ</th>
                    <th>Thuế</th>
                    <th>Khuyến mãi</th>
                    <th>Giảm giá phí dịch vụ</th>
                </tr>
            </thead>
            <tbody>
                {tablePrice.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td style={{width: 70}}>{item.name}</td>
                        <td  style={{width: 70}}>{item.ship}</td>
                        <td>{item.service}</td>
                        <td>{item.tax}</td>
                        <td>{item.promotion}</td>
                        <td>{item.discount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
        </>
    )
}