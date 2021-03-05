import axios from 'axios';

const NURSE_API_BASE_URL="http://localhost:8080/api/v1/nurses";

class NurseService {
     getNurse(){
        return axios.get(NURSE_API_BASE_URL);
    }

    createNurse(nurse){
        return axios.post(NURSE_API_BASE_URL,nurse);
    }

     getNurseById(nurseId){
        return axios.get(NURSE_API_BASE_URL + '/' + nurseId);
    }  
}

export default new NurseService()
