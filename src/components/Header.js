import 'bootstrap/dist/css/bootstrap.min.css';

import Styles from "../css/Header.module.css"
import "../css/test.scss";
import { useEffect } from 'react';


export default function Header(props){
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      },[]);
    
      const handleScroll = () => {

        if(window.scrollY > 100) {

            document.body.classList = 'scroll'
        }else{

            document.body.classList = ''
        }

      };
     

    return(
        <>
        {/* <div className="header d-flex justify-content-center justify-content-lg-between  flex-lg-row flex-column align-items-center align-items-lg-start px-2 px-lg-5"> */}
        <div className="header">
            <div className=''>
                <div className="d-flex flex-column align-items-center">
                    <h1><a href="" className='d-block'><img src="./img/LeeSeokWoologo.svg" alt="" /></a></h1>
                    <ul className="custom-text d-flex mt-3 mt-lg-0" id="gnb">
                             {props.props.db.map((v, i)=>{
                                return(
                                <li>
                                    <a className={v.a.cls} href={v.a.href}>{v.a.text}</a>
                                    <ul>
                                        {v.ul.map((vv, ii)=>{
                                           return <li><a href={vv.href}>{vv.text}</a></li>
                                        })}
                                    </ul>
                                </li>
                                )
                            })}
                    </ul>
                </div>
            </div> 
        </div>
        <div style={{height: "200vh"}}></div>
        </>
    )
}