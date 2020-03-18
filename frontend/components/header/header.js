import { useMediaQuery } from 'react-responsive'
import style from './header.module.css'
import { useState } from 'react';
import Drawer from './drawer';
import SearchBar from './searchBar'
import Google from './google';
import Facebook from './facebook';
// import { GoSearch } from "react-icons/go";


const Header = () => {
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 570px)' })



  return <div className={`${style.header} shadow bg-info`}>
          <div className={`row col justify-content-center`}>
              <div className={`col-3 text-center ${style.app_title}`}>
                 {process.env.APP_NAME}
              </div>
              <div className={`col-9 `}>
                  { !isTabletOrMobileDevice &&
                    <nav className='row col justify-content-center'>
                      <ul>
                      <Google />
                      </ul>
                      <ul>
                      <Facebook />
                      </ul>
                    </nav>}

                <div className='container row'>
                            {isTabletOrMobileDevice &&
                                <div className='col-9 float-left'>
                                      <div className={`${style.search_bar}`}>
                                      <SearchBar />
                                      </div>
                                </div>
                            }

                           {isTabletOrMobileDevice &&
                                  <div className={`${style.drawer_bar} float-right col-1`}>
                                    <Drawer />
                                  </div>

                          }



              </div>
          </div>
          </div>

          {/* ADDED STYLE SPECIFC TO THIS COMPONENT ONLY*/}
          <style jsx>{`
            ul{
              padding-top: 0px;
            }

           .row{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 0px!important;
             padding-left: 0px!important;
           }
           @media (max-width: 1224px) {
             .col-3{
               padding-top: 14px!important;
             }
           }
           .col{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 20px!important;
             padding-left:0px!important;
           }
           .col-8{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 10px!important;
             margin-top: 15px!important;
             padding-left:0px!important;
           }
           .col-9{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 0px!important;
             padding-left: 20px!important;
             padding-top:5px;
           }
           .col-3{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 0px!important;
             padding-left:7px!important;
           }
           .col-2{
             margin-left: 0px!important;
             margin-right:0px!important;
             padding-right: 0px!important;
             padding-left:15px!important;
           }
         .col-1{
           padding-left:10px!important;
           padding-right:10px!important;
         }
          `}</style>
         </div>
}
export default Header;
