import axios from "axios";
const base_url = process.env.REACT_APP_SERVER;


axios.interceptors.request.use((req) =>{
    if(localStorage.getItem("africanStack")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("africanStack")).token}`
    }
    return req
})


export const signUp= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/signup`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const generateAcc= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/payment/generate`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
var head = {'Content-Type': 'application/json', 
                    'X-Auth-Signature': process.env.REACT_APP_PROVIDUS_XAUTH,
                    'Client-Id': process.env.REACT_APP_PROVIDUS_CLIENT_ID 
                    }
    
export const acccountGen= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/generate_account`,
    data: formData,
})
export const login= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/login`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})

export const verifyUser = (code) => { 
    return axios.get(`${base_url}/api/auth/confirm/${code}`).then((response) => {
      return response.data;
    }).catch(err=> {
        if(err.response){
            return err.response.data
        }
    })
  };

export const appUpload= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/app_category`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const appChangeStatus= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/admin/update_category`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})


export const withdraw= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/withdrawal`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updateProfile= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/user/profile_update`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const avatarUpdate= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/user/avatar_update`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const activatePlan= (formData) =>axios({
    method: 'post',
    url: `${base_url}/api/activateplan`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updateAvatar= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/updateAvatar`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updateWithdraw= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/admin/update/withdrawal`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const notify= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/notification`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const requestWithdraw= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/withdraw`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const creditUser= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/admin/credit_user`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})

export const Id= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/id`,
    data: formData,
})

export const requestFund= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/payment/requestFund`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const update= (formData) =>axios({
    method: 'patch' ,
    url: `${base_url}/admin/acceptJob`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updatePlan= (formData) =>axios({
    method: 'patch' ,
    url: `${base_url}/payment/upgrade`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updatePaymentRequest= (formData) =>axios({
    method: 'patch' ,
    url: `${base_url}/admin/withdraw/updaterequest`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})


export const rave= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/payment/rave`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const transferFund= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/tranferFund`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
