import React, { useState } from "react";
import './adminComponets.css'

function HomePage() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState(null);

    // Hàm để xử lý khi người dùng chọn ảnh
    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setSelectedImage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //     }
    // };

    const LIST_UPDATE = {
        banner: [
            {
                "linkPicture": "banner/banner1.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner1"
            },
            {
                "linkPicture": "banner/banner2.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner2"
            },
            {
                "linkPicture": "banner/banner3.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner3"
            },
            {
                "linkPicture": "banner/banner4.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner4"
            },
            {
                "linkPicture": "banner/banner5.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner5"
            },
            {
                "linkPicture": "banner/banner6.jpg",
                "linkUpdate": "/home/banner",
                "name": "banner6"
            }
        ],
        sale: [
            {
                "linkPicture": "sale/sale1.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale1"
            },
            {
                "linkPicture": "sale/sale2.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale2"
            },
            {
                "linkPicture": "sale/sale3.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale3"
            },
            {
                "linkPicture": "sale/sale4.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale4"
            },
            {
                "linkPicture": "sale/sale5.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale5"
            },
            {
                "linkPicture": "sale/sale6.jpg",
                "linkUpdate": "/home/sale",
                "name": "sale6"
            }
        ]
    }

    
    const handleFileChange = (e) => {
        // if (Number(branchID) === 15)
        // else setFile(e.target.files[0]);    
        handleImageChange(e)    
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");    
                const MAX_WIDTH = 1500; // Set maximum width for the resized image
                const scaleFactor = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleFactor;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            //  const resizedDataURL = canvas.toDataURL("image/png");
                let resizedDataURL 
                canvas.toBlob((blob) => {
                    resizedDataURL = new File([blob], "fileName.jpg", { type: "image/jpeg" })
                    setFile(resizedDataURL);
                }, 'image/jpeg');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleUploadPassport = async (link,name) => {
        console.log("start up Picture")
        const formData = new FormData();
        formData.append('image', file);
        //formData.append('image_data', file);
        // image_data

        try {
        console.log("start up Picture 2")
        const response = await fetch(`http://103.163.119.180:5100/upload${link}/${name}`, { //+dataState._id
            method: 'POST',
            body: formData,
            // headers: { Authorization: "", },
            // headers: { Link: link, Name: name },
        });

        console.log("response", response);

        //   if (response.ok) {
        //     const data = await response.json();
        //     //console.log('URL ảnh đã tải lên:', data.imageUrl);
            
        //     const responseUpPassport = await uploadPassPort(dataState._id, { link:data.imageUrl }, token);

        //     //console.log("responseUpPassport", responseUpPassport);

        //     if(responseUpPassport) {
        //         if(responseUpPassport.data.status === 1) informationToast(responseUpPassport.data.msg);
        //         else errorToast(responseUpPassport.data.msg);
        //     }
        //     // update to server
        //     setDataState({
        //         ...dataState,
        //         passport: data.imageUrl
        //     })
        //   } else {
        //     errorToast("Error when upload Passport, Please check the photo size < 1Mb")
        //     //console.error('Lỗi tải lên ảnh.');
        //   }
        } catch (error) {
        console.error('Lỗi kết nối máy chủ:', error);
        }
    };

    function renderListIUpPicture(listRender, list) {
        return listRender.map((item, index) => {
            return renderInputPicture(item.linkPicture, item.linkUpdate, item.name, index+list)
        })
    }

    function renderInputPicture(linkPicture, linkUpdate, name, index) {
        return (
        <div style={{background: (index === 0 || index === 2 || index === 4) ? "yellow":""}}>
            <div style={{width:'400px'}}>
                <img className="admin-home_page-picture-content-item" src={`http://shingolf.vn/image/home/${linkPicture}`}></img>
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div>
                <span className="mr-3 ml-2 mt-1">Link goto: </span>
                <input type="text" className="admin-home_page-picture-content-input_link"/>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport(linkUpdate, name)}>Update Picture</button>
        </div>
        )
    }

return(
        <div className="admin-home_page">
            <h1 className="admin_components-title"> HOME PAGE CHANGE</h1>
            <div className="admin-home_page-picture">
                <div className="admin-content-title" style={{background:"aqua"}}>* Change Layout Banner Picture</div>
                <h4>Recomand size: 300x300</h4>
                <div className="admin-home_page-picture-content">
                    <div className="d-flex" style={{width:'100%'}}>
                         {renderListIUpPicture(LIST_UPDATE.banner.slice(0, 3), 0)}
                    </div>
                    <div className="d-flex" style={{width:'100%'}}>
                        {renderListIUpPicture(LIST_UPDATE.banner.slice(-3), 3)}
                    </div>
                </div>
            </div>
            <div>-----</div>
            <div className="admin-home_page-big_sale">
            <div className="admin-content-title">* Change Picture Banner Big Sale</div>
               <h4>Recomand size 300x300</h4>
               <div className="admin-home_page-picture-content">
                    <div className="d-flex" style={{width:'100%'}}>
                         {renderListIUpPicture(LIST_UPDATE.sale.slice(0, 3), 0)}
                    </div>
                    <div className="d-flex" style={{width:'100%'}}>
                        {renderListIUpPicture(LIST_UPDATE.sale.slice(-3), 3)}
                    </div>
                </div>

            </div>

            <div>-----</div>
            {/* <div className="admin-home_page-big_sale">
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
                            <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/home/list","list1")}>Update List</button>
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
                            <button className="btn btn-primary mt-3" onClick={() => handleUploadPassport("/home/list","list2")}>Update List</button>

                        </div>
                    </div>


            </div> */}

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
