import{j as h,n as c,r as d,B as S,R as w,a as C}from"./vendor.2fd3aef8.js";const F=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};F();const e=h.exports.jsx,s=h.exports.jsxs,k=h.exports.Fragment,N=c.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`,L=({children:r})=>e(N,{children:r}),E=c.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,I=c.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`,b=(r,n)=>{const[i,a]=d.exports.useState("");return[i,()=>s(k,{children:[e(E,{children:r}),s(I,{value:i,onChange:t=>a(t.target.value),children:[e("option",{value:"",children:"Select..."}),n.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},P=[{id:"USD",nombre:"Dolar de Estados Unidos"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],A=c.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`,D=({setMonedas:r})=>{const[n,i]=d.exports.useState([]),[a,o]=d.exports.useState(!1),[t,l]=b("Choose your currency",P),[p,u]=b("Choose your cryptocurrency",n);return d.exports.useEffect(()=>{(async()=>{const v=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")).json()).Data.map(y=>({id:y.CoinInfo.Name,nombre:y.CoinInfo.FullName}));i(v)})()},[]),s(k,{children:[a&&e(L,{children:"All fields are mandatory"}),s("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){o(!0),setTimeout(()=>{o(!1)},3e3);return}o(!1),r({moneda:t,criptomoneda:p})},children:[e(l,{}),e(u,{}),e(A,{type:"submit",value:"To quote"})]})]})},j=c.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`,R=c.img`
    display: block;
    width: 120px;
`,m=c.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`,M=c.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`,z=({resultado:r})=>{const{PRICE:n,HIGHDAY:i,LOWDAY:a,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=r;return s(j,{children:[e(R,{src:`https://cryptocompare.com/${t}`,alt:"imagen cripto"}),s("div",{children:[s(M,{children:["The price is: ",e("span",{children:n})]}),s(m,{children:["Highest Price of the Day: ",e("span",{children:i})]}),s(m,{children:["Lowest Price of the Day: ",e("span",{children:a})]}),s(m,{children:["Change in the last 24 hours: ",e("span",{children:o})]}),s(m,{children:["Last Update: ",e("span",{children:l})]})]})]})};const O=()=>s("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]});var T="/criptos-react/assets/imagen-criptos.c0430b0f.png";const U=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,$=c.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`,H=c.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function B(){const[r,n]=d.exports.useState({}),[i,a]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(r).length>0&&(async()=>{t(!0),a({});const{moneda:p,criptomoneda:u}=r,g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${u}&tsyms=${p}`,x=await(await fetch(g)).json();a(x.DISPLAY[u][p]),t(!1)})()},[r]),e(S,{basename:"/criptos-react/",children:s(U,{children:[e($,{src:T,alt:"imagenes criptomonedas"}),s("div",{children:[e(H,{children:"Instantly Quote Cryptocurrencies"}),e(D,{setMonedas:n}),o&&e(O,{}),i.PRICE&&e(z,{resultado:i})]})]})})}w.render(e(C.StrictMode,{children:e(B,{})}),document.getElementById("root"));
