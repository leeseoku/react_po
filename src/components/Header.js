import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/test.scss";
import Styles from "../css/Header.module.css"


export default function Header(props){

    return(
        <>
        {/* <div className="header d-flex justify-content-center justify-content-lg-between  flex-lg-row flex-column align-items-center align-items-lg-start px-2 px-lg-5"> */}
        <div className="header pt-3 pb-3 px-lg-5 fixed-top">
            <div className='px-lg-5'>
                <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between px-lg-5 ">
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
        </>
    )
}