// import React, {Components} from 'react';
import axios from 'axios';
import apiURL from './api';

export const getCustomerList = function() {
    return axios.get( apiURL ).then( response => response.data );
} 

export const postCustomer = function(customer) {
    return axios.post(apiURL, customer).then(response => {
        return response.data
    })
}

export const getCustomer = function(id) {
    return axios.get(apiURL+id).then(response => response.data)
}

export const updateCustomer = function(id , obj){
    return axios.patch(apiURL+id, obj).then( response => response.data)
}