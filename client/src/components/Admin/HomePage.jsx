import React, { useState } from "react";
import './adminComponets.css'

function HomePage() {

    const [selectedImage, setSelectedImage] = useState(null);

      // Hàm để xử lý khi người dùng chọn ảnh
        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
            }
        };
        
    return(
        <div className="admin-home_page">
            <h1 className="admin_components-title"> HOME PAGE CHANGE</h1>
            <div className="admin-home_page-picture">
                <div className="admin-content-title">* Change Layout Banner Picture</div>
                <h4>Recomand size: 300x300</h4>
                <div className="admin-home_page-picture-content d-flex">
                    <div>
                        <div style={{width:'400px'}}>
                            <img className="admin-home_page-picture-content-item" src="https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627961881-images10898921-1611196252800651567316.jpg"></img>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <div>
                            <span className="mr-3 ml-2 mt-1">Link goto: </span>
                            <input type="text" className="admin-home_page-picture-content-input_link"/>
                        </div>
                    </div>

                    <div>
                        <div style={{width:'400px'}}>
                            <img className="admin-home_page-picture-content-item" src="https://nemthuanviet.com/wp-content/uploads/2023/10/canh-dep-1.jpg"></img>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <div>
                            <span className="mr-3 ml-2 mt-1">Link goto: </span>
                            <input type="text" className="admin-home_page-picture-content-input_link"/>
                        </div>
                    </div>

                    <div>
                        <div style={{width:'400px'}}>
                            <img className="admin-home_page-picture-content-item" src="https://ik.imagekit.io/tvlk/blog/2023/07/canh-dep-thien-nhien-Viet-Nam-11-1024x576.jpg?tr=dpr-2,w-675"></img>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                         </div>
                         <div>
                            <span className="mr-3 ml-2 mt-1">Link goto: </span>
                            <input type="text" className="admin-home_page-picture-content-input_link"/>
                        </div>
                    </div>
                    
                    <div>
                        <div style={{width:'400px'}}>
                            <img className="admin-home_page-picture-content-item" src="https://m.yodycdn.com/blog/phong-canh-dep-o-viet-nam-yody-vn-14.jpg"></img>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                        <div>
                            <span className="mr-3 ml-2 mt-1">Link goto: </span>
                            <input type="text" className="admin-home_page-picture-content-input_link"/>
                        </div>
                    </div>
                    
                </div>
                <button className="btn btn-primary mt-3">Save Change Picture</button>
            </div>
            <div>-----</div>
            <div className="admin-home_page-big_sale">
            <div className="admin-content-title">* Change Picture Banner Big Sale</div>
               <h4>Recomand size 300x300</h4>
               <div style={{width:'400px'}}>
                        <img className="admin-home_page-picture-content-item" src="https://ktmt.vnmediacdn.com/images/2021/08/03/7-1627961881-images10898921-1611196252800651567316.jpg"></img>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div>
                    <span className="mr-3 ml-2 mt-1">Link goto: </span>
                    <input type="text" className="admin-home_page-picture-content-input_link"/>
                </div>
            </div>

            <div>-----</div>
            <div className="admin-home_page-big_sale">
            <div className="admin-content-title">* Change Picture Banner List</div>
               <h4>Recomand size 300x300</h4>
                <div class="row">
                    <div class="col-4 col-md-6 mt-5">
                            <div class="banner-container">
                                <div class="col-md-4 d-md-flex align-items-center justify-content-center banner-width">
                                    <div class="banner-title">Gậy Golf</div>
                                </div>
                                <div class="col-md-8 p-0 m-0">
                                    <a class="link-route" href="/hotel-hn">
                                    <img class="content__branch-img" src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304" alt="hotel hanoi azumaya hotel"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row"><div class="col-4 col-md-6 mt-5">
                            <div class="banner-container">
                                <div class="col-md-4 d-md-flex align-items-center justify-content-center banner-width">
                                    <div class="banner-title">Gậy Golf</div>
                                </div>
                                <div class="col-md-8 p-0 m-0">
                                    <a class="link-route" href="/hotel-hn">
                                    <img class="content__branch-img" src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304" alt="hotel hanoi azumaya hotel"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>

            <div>-----</div>
            <div className="admin-home_page-contact">
               <div className="admin-content-title">* Change Contact </div>
                <div>
                    <h4>* Phone : 12456546</h4>
                    <h4>* Address : abcd xyz</h4>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
