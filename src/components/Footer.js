const Footer = () => {
    return ( 
        <footer className="text-white p-10 bg-slate-800">
          
         <a href="#header" className='-mt-14 absolute text-2xl animate-bounce'> <i className="transition fa-solid fa-chevron-up text-white p-4 bg-slate-800 rounded-3xl hover:-translate-y-1 hover:scale-105"></i></a>
        
          <p className=" text-center">© 2024 <a className="hover:text-yellow-main transition" href="#">THE AUTHENTIC APPROACH</a> |<span className="text-sm  ">  Designed & Managed by <a className="hover:text-yellow-main" target="_blank" href="http://amirfamili.com">AMF</a></span></p>
        </footer>
     );
}
 
export default Footer;