import { GoogleLoginButton } from "react-social-login-buttons";

const Google = () => {
  return <>
  <GoogleLoginButton onClick={() => alert("Hello")} />
     <style global jsx>{`
       button{
         font-size: 12px!important;
         height: 35px!important;
         border-radius: 0px!important;
       }
       ul{
          list-style-type: disc;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 10px!important;
       }
       `}</style>
        </>
}
export default Google;
