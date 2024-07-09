import axios from 'axios';


// router.post('/make_order', productCtrl.makeOrder);

// router.get('/take_order_by_type/:type', productCtrl.takedataOrderByType);
export function takeOrderByType(type, token) {
    let newURL = "/product/take_order_by_type/"+type;
    return axios.get(`${newURL}`, {
        headers: { Authorization: token }
    });
}

