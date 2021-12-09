import axois from 'axios';

// FIXME: configure the instance according to the API doc
//  https://dummyapi.io/docs

const instance = axois.create({
  baseURL: process.env.API_URL
});

// FIXME: what else can we export from here?

export default instance;
