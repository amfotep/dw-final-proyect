const $ = (id) => document.getElementById(id);

const navbar_container = $('navbar-container');
const navbar = $('navbar');
const btn_menu = $('btn-menu');
const bars = $('bars')
const logo = $('logo')


export default {
    navbar,
    navbar_container,
    btn_menu,
    bars,
    logo
}
