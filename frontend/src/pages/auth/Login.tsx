import api from '../../services/api';

const handleLogin = async () => {
    const res = await api.post('/login', { email: 'piyushpalak04@gmail.com', password: '12345' });
    const data = res.data;

    localStorage.setItem('token', data.access_token);

};
export default handleLogin;