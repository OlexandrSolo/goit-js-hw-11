import{S as m,i as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",h="44841461-2c7fd944dee0b14672f32444a",y="photo",g="horizontal",b=!0;function L(n){return fetch(`${f}?key=${h}&q=${n}&&image_type=${y}&orientation=${g}&safesearch=${b}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function $(n){return n.map(({largeImageURL:i,webformatURL:s,tags:e,views:r,downloads:o,likes:u,comments:d})=>`<li class="item-gallery">
    <a  class="gallery-link" href=${i}><img src="${s}" alt="${e}" title="${e}" width="360" height="200"></a>
    <div>
      <ul class="description-list">
        <li><p class="description-element">Like<br><span>${u}</span></p></li>
        <li><p class="description-element">Views<br><span>${r}</span></p></li>
        <li><p class="description-element">Comments<br><span>${d}</span></p></li>
        <li><p class="description-element">Downloads<br><span>${o}</span></p></li>
      </ul>
      </img>
  </li>
  </div>`).join(" ")}const v={gallery:document.querySelector(".gallery"),form:document.querySelector(".js-form"),loader:document.querySelector(".loader")},{gallery:a,form:c,loader:l}=v;c.addEventListener("submit",w);a.addEventListener("click",q);function q(n){n.preventDefault(),n.target.nodeName==="IMG"&&new m(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"})}function w(n){n.preventDefault();const t=n.currentTarget;if(l.classList.remove("visually-hidden"),!t.elements.query.value.trim()==="")return p.warning({title:"Warning",message:"Sorry, there are not no images matching your search query"});a.children.length&&(a.innerHTML=""),L(t.elements.query.value).then(i=>{S(i)}).catch(console.log).finally(()=>{l.classList.add("visually-hidden"),c.reset()})}function S(n){const t=$(n.hits);a.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
