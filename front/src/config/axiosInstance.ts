import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      if(window.location.pathname!=="/landingpage"){      
        console.error('Unauthorized! Redirecting to login...');
        window.location.href="/landingpage";  
      }
    }
    return Promise.reject(error);
  }
);

export const axiosImage = axios.create({
  baseURL: "",
  headers: {
Accept: "image/png"  },
});
axiosImage.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      if(window.location.pathname!=="/landingpage"){      
        console.error('Unauthorized! Redirecting to login...');
        window.location.href="/landingpage";  
      }
    }
    return Promise.reject(error);
  }
);
export const axiosFormData =axios.create({
  baseURL:"",

     headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  },

})
axiosFormData.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      if(window.location.pathname!=="/landingpage"){      
        console.error('Unauthorized! Redirecting to login...');
        window.location.href="/landingpage";  
      }
    }
    return Promise.reject(error);
  }
);

