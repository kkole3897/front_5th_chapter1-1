(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}})();const p="router-link";let f=[],u="history",d="";const m=(t,e)=>e?`${e}${t}`:t,E=(t,e={})=>(f=t,u="history",e.basename&&!e.basename.startsWith("/")?d=`/${e.basename}`:d=e.basename,o=>{const s=a=>{if(!o)return;const i=t.find(c=>m(c.path,d)===a),r=t.find(c=>c.path==="*");if(o.innerHTML="",i){o.appendChild(i.component());return}else if(r){o.appendChild(r.component());return}};document.addEventListener("click",a=>{if(a.target.dataset.link===p){a.preventDefault();const i=a.target.href;window.history.pushState(null,"",i);const r=i.replace(window.location.origin,"");s(r)}}),window.addEventListener("popstate",()=>{const a=window.location.pathname;s(a)});const n=window.location.pathname;s(n)}),$=t=>(f=t,u="hash",l=>{const o=n=>{if(!l)return;const a=(n||"/").replace("#",""),i=t.find(c=>c.path===a),r=t.find(c=>c.path==="*");if(l.innerHTML="",i){l.appendChild(i.component());return}else if(r){l.appendChild(r.component());return}};window.addEventListener("hashchange",()=>{const n=window.location.hash;o(n)});const s=window.location.hash;o(s)}),g=()=>({push:e=>{u==="history"?(window.history.pushState(null,"",m(e,d)),window.dispatchEvent(new Event("popstate"))):window.location.hash=e},replace:e=>{u==="history"?(window.history.replaceState(null,"",m(e,d)),window.dispatchEvent(new Event("popstate"))):window.location.hash=e}}),L=()=>({pathname:u==="history"?window.location.pathname.replace(d,""):(window.location.hash||"/").replace("#","")}),h=t=>`<a href="${u==="history"?m(t.to,d):`#${t.to}`}" data-link="${p}" ${t.className?`class="${t.className}"`:""}>${t.children??""}</a>`,N=t=>{var e;return u==="history"?t.replace?window.history.replaceState(null,"",m(t.to,d)):window.history.pushState(null,"",m(t.to,d)):(t.replace,window.location.hash=t.to),(e=f.find(l=>l.path===t.to))==null?void 0:e.component()},b={state:{user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null},setUser(t){if(!t){this.state.user=null,localStorage.removeItem("user");return}this.state.user=t,localStorage.setItem("user",JSON.stringify(t))},updateUser(t){this.state.user&&(this.state.user={...this.state.user,...t},localStorage.setItem("user",JSON.stringify(this.state.user)))},isLoggedIn(){return this.state.user!==null}},w=()=>{const t=g(),e=L(),l=b.isLoggedIn(),o=e.pathname,s=document.createElement("header");s.classList.add("bg-blue-600","text-white","p-4","sticky","top-0"),s.innerHTML=`
    <h1 class="text-2xl font-bold">항해플러스</h1>
  `;const n=l?`
      <li>${h({to:"/",className:o==="/"?"text-blue-600 font-bold":"text-gray-600",children:"홈"})}</li>
      <li>${h({to:"/profile",className:o==="/profile"?"text-blue-600 font-bold":"text-gray-600",children:"프로필"})}</li>
      <li><a href="#" id="logout" type="button" class="text-gray-600">로그아웃</a></li>
    `:`
      <li>${h({to:"/",className:o==="/"?"text-blue-600":"text-gray-600",children:"홈"})}</li>
      <li>${h({to:"/login",className:"text-gray-600",children:"로그인"})}</li>
    `,a=document.createElement("nav");a.classList.add("bg-white","shadow-md","p-2","sticky","top-14"),a.innerHTML=`
    <ul class="flex justify-around">
      ${n}
    </ul>
  `;const i=r=>{r.target.id==="logout"&&(r.preventDefault(),b.setUser(null),alert("로그아웃 되었습니다."),t.push("/login"))};return a.addEventListener("click",i),[s,a]},x=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,S=()=>{const t=b.isLoggedIn(),e=document.createElement("div");e.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),e.innerHTML=`
    <div class="max-w-md w-full">
      <main class="p-4">
        ${t?`<div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea
                class="w-full p-2 border rounded"
                placeholder="무슨 생각을 하고 계신가요?"
              ></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                게시
              </button>
            </div>`:""}

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      ${x()}
    </div>
  `;const l=e.querySelector("main");return w().forEach(s=>{l.insertAdjacentElement("beforebegin",s)}),e},P=()=>{const t=b.state.user,e=document.createElement("div");e.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),e.innerHTML=`
    <div class="max-w-md w-full">
      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
            내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
                >사용자 이름</label
              >
              <input
                type="text"
                id="username"
                name="username"
                value="${(t==null?void 0:t.username)??""}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
                >이메일</label
              >
              <input
                type="email"
                id="email"
                name="email"
                value="${(t==null?void 0:t.email)??""}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-6">
              <label
                for="bio"
                class="block text-gray-700 text-sm font-bold mb-2"
                >자기소개</label
              >
              <textarea
                id="bio"
                name="bio"
                rows="4"
                class="w-full p-2 border rounded"
              >${(t==null?void 0:t.bio)??""}</textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </main>

      ${x()}
    </div>
  `;const l=w(),o=e.querySelector("main");l.forEach(n=>{o.insertAdjacentElement("beforebegin",n)});const s=n=>{if(n.target.id!=="profile-form")return;n.preventDefault();const a=new FormData(n.target),i=a.get("username");if(!i){alert("이름을 입력해주세요.");return}const r=a.get("email");if(r&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){alert("이메일 형식이 올바르지 않습니다.");return}const v=a.get("bio"),y={username:i,email:r,bio:v};b.updateUser(y),alert("프로필이 업데이트 되었습니다.")};return e.addEventListener("submit",s),e},H=()=>{const t=g(),e=o=>{if(o.target.id!=="login-form")return;o.preventDefault();const n=new FormData(o.target).get("username");if(!n){alert("이름을 입력해주세요.");return}const a={username:n,email:"",bio:""};b.setUser(a),alert("로그인 성공"),t.push("/profile")},l=document.createElement("main");return l.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),l.innerHTML=`
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="password" type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  `,l.addEventListener("submit",e),l},R=()=>{const t=document.createElement("main");return t.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),t.innerHTML=`
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      ${h({to:"/",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold",children:"홈으로 돌아가기"})}
    </div>
  `,t};export{H as L,S as M,R as N,P,N as a,$ as b,E as c,b as s};
