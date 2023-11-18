import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function Logout(){

    cookies.remove('fraktional-user');
    window.location.href = "/auth/login";
}