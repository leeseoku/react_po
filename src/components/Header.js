import 'bootstrap/dist/css/bootstrap.min.css';

import Styles from "../css/Header.module.css"
import "../css/test.scss";


export default function Header(){

    return(
        <>
        {/* <div className="header d-flex justify-content-center justify-content-lg-between  flex-lg-row flex-column align-items-center align-items-lg-start px-2 px-lg-5"> */}
        <div className="header mt-3 px-lg-5 ">
            <div className='px-lg-5'>
                <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between px-lg-5 ">
                    <h1><a href="" className='d-block'><img src="./img/LeeSeokWoologo.svg" alt="" /></a></h1>
                    <ul className="custom-text d-flex mt-3 mt-lg-0" id="gnb">
                        <li>
                            <a className="costom-text" href="">git</a>
                            <ul>
                                <li><a href="">브런치</a></li>
                                <li><a href="">협업하기</a></li>
                                <li><a href="">페이지 만들기</a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">react</a>
                            <ul>
                                <li><a href="">역할</a></li>
                                <li><a href="">컴포넌트</a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">ndoe</a>
                            <ul>
                                <li><a href="">무엇인가?</a></li>
                                <li><a href="">역할</a></li>
                                <li><a href="">사용법</a></li>
                                <li><a href="">리액트의 노드</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">sql</a>
                            <ul>
                                <li><a href="">데이터 분리</a></li>
                                <li><a href="">데이터 체계</a></li>
                                <li><a href="">조인</a></li>
                                <li><a href="">api</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
        </>
    )
}