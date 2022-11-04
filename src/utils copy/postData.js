import axios from "axios";
const base_url = process.env.REACT_APP_SERVER;
// const base_url = process.env.REACT_APP_SERVER;

axios.interceptors.request.use((req) =>{
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})
export const signUp= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/api/signup`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
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

export const postJob= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/job/post`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const updateProfile= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/updateprofile`,
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
    url: `${base_url}/user/updateWithdraw`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const requestWithdraw= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/withdraw`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const getId= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/job/id`,
    data: formData,
})
export const verifyJobDone = (formData) => axios({
        method: 'post' ,
        url: `${base_url}/job/proofcheck`,
        data: formData,
    })
export const proofUpdate = (formData) => axios({
        method: 'post' ,
        url: `${base_url}/job/proofupdate`,
        data: formData,
    })

export const Id= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/user/id`,
    data: formData,
})
export const confirm= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/payment/confirm`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const paypal= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/payment/paypal`,
    data: formData
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
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
export const updateMyJob= (formData) =>axios({
    method: 'patch' ,
    url: `${base_url}/user/update`,
    data: formData,
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
})
export const upload= async(formData) =>await axios.post(`${base_url}/job/proof`,
 formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
export const rave= (formData) =>axios({
    method: 'post' ,
    url: `${base_url}/payment/rave`,
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
