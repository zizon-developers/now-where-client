const API_HOST = {
  Location:
    process.env.NODE_ENV === 'production'
      ? 'https://location.lovely-coders.xyz'
      : 'https://dev-location.lovely-coders.xyz',
};

export default API_HOST;
