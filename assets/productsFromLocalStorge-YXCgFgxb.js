(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=[{id:1,name:"Smartphone",brand:"Apple",description:"Feature-rich smatphone with a 6.2 inch scree. 12MP dual camera. 128GB storage and a 4000mAh battery",price:1e5,stock:100,image:"../Images/phone.png"},{id:2,name:"Wireless Headphones",brand:"Apple",description:"High-quality wireless headphones with over-ear design. 20hours of battery lige.and a sleek blak color",price:1e4,stock:30,image:"../Images/headphone.png"},{id:3,name:"Laptop",brand:"Apple",description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inc FHD display",price:9e4,stock:50,image:"../Images/laptop.webp"},{id:4,name:"Watch",brand:"Apple",description:"Smartwatch with a 1.3 inch AMOLED display, water-resistent design, fitness tracking features, and a stylish silver color",price:5e3,stock:20,image:"../Images/smart watch.webp"},{id:5,name:"Speaker",brand:"Boat",description:"High-quality speakers with 20 hours of battery life and a sleek black color.",price:2e3,stock:30,image:"../Images/speaker.jpg"},{id:6,name:"Television",brand:"Sony",description:"high-resolution display (4K or more), vibrant colors with HDR support, and a smooth refresh rate (120 Hz+).",price:15e4,stock:50,image:"../Images/TV.jpg"},{id:7,name:"Smartphone",brand:"Apple",description:"Feature-rich smatphone with a 6.2 inch scree. 12MP dual camera. 128GB storage and a 4000mAh battery",price:1e5,stock:100,image:"../Images/phone.png"},{id:8,name:"Smartphone",brand:"Apple",description:"Feature-rich smatphone with a 6.2 inch scree. 12MP dual camera. 128GB storage and a 4000mAh battery",price:1e5,stock:100,image:"../Images/phone.png"},{id:9,name:"Smartphone",brand:"Apple",description:"Feature-rich smatphone with a 6.2 inch scree. 12MP dual camera. 128GB storage and a 4000mAh battery",price:1e5,stock:100,image:"../Images/phone.png"}],n=t=>{let a=document.querySelector(".item-num");return a.innerText=t.length},p=()=>{let t=localStorage.getItem("All_Products");return t?(t=JSON.parse(t),n(t),t):[]};export{c as a,p,n as t};
