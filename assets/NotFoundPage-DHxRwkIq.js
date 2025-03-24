(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}})();const h="router-link";let b=[],d="history";const y=t=>(b=t,d="history",o=>{const l=e=>{if(!o)return;const a=t.find(r=>r.path===e),i=t.find(r=>r.path==="*");if(o.innerHTML="",a){o.appendChild(a.component());return}else if(i){o.appendChild(i.component());return}};document.addEventListener("click",e=>{if(e.target.dataset.link===h){e.preventDefault();const a=e.target.href;window.history.pushState(null,"",a);const i=a.replace(window.location.origin,"");l(i)}}),window.addEventListener("popstate",()=>{const e=window.location.pathname;l(e)});const n=window.location.pathname;l(n)}),L=t=>(b=t,d="hash",o=>{const l=e=>{if(!o)return;const a=(e||"/").replace("#",""),i=t.find(m=>m.path===a),r=t.find(m=>m.path==="*");if(o.innerHTML="",i){o.appendChild(i.component());return}else if(r){o.appendChild(r.component());return}};window.addEventListener("hashchange",()=>{const e=window.location.hash;l(e)});const n=window.location.hash;l(n)}),f=()=>({push:s=>{d==="history"?(window.history.pushState(null,"",s),window.dispatchEvent(new Event("popstate"))):window.location.hash=s},replace:s=>{d==="history"?(window.history.replaceState(null,"",s),window.dispatchEvent(new Event("popstate"))):window.location.hash=s}}),v=()=>({pathname:d==="history"?window.location.pathname:(window.location.hash||"/").replace("#","")}),u=t=>`<a href="${d==="history"?t.to:`#${t.to}`}" data-link="${h}" ${t.className?`class="${t.className}"`:""}>${t.children??""}</a>`,E=t=>{var s;return d==="history"?t.replace?window.history.replaceState(null,"",t.to):window.history.pushState(null,"",t.to):(t.replace,window.location.hash=t.to),(s=b.find(o=>o.path===t.to))==null?void 0:s.component()},c={state:{user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null},setUser(t){if(!t){this.state.user=null,localStorage.removeItem("user");return}this.state.user=t,localStorage.setItem("user",JSON.stringify(t))},updateUser(t){this.state.user&&(this.state.user={...this.state.user,...t},localStorage.setItem("user",JSON.stringify(this.state.user)))},isLoggedIn(){return this.state.user!==null}},p=()=>{const t=f(),s=v(),o=c.isLoggedIn(),l=s.pathname,n=document.createElement("header");n.classList.add("bg-blue-600","text-white","p-4","sticky","top-0"),n.innerHTML=`
    <h1 class="text-2xl font-bold">항해플러스</h1>
  `;const e=o?`
      <li>${u({to:"/",className:l==="/"?"text-blue-600 font-bold":"text-gray-600",children:"홈"})}</li>
      <li>${u({to:"/profile",className:l==="/profile"?"text-blue-600 font-bold":"text-gray-600",children:"프로필"})}</li>
      <li><a href="#" id="logout" type="button" class="text-gray-600">로그아웃</a></li>
    `:`
      <li>${u({to:"/",className:l==="/"?"text-blue-600":"text-gray-600",children:"홈"})}</li>
      <li>${u({to:"/login",className:"text-gray-600",children:"로그인"})}</li>
    `,a=document.createElement("nav");a.classList.add("bg-white","shadow-md","p-2","sticky","top-14"),a.innerHTML=`
    <ul class="flex justify-around">
      ${e}
    </ul>
  `;const i=r=>{r.target.id==="logout"&&(r.preventDefault(),c.setUser(null),alert("로그아웃 되었습니다."),t.push("/login"))};return a.addEventListener("click",i),[n,a]},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,$=()=>{const t=c.isLoggedIn(),s=document.createElement("div");s.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),s.innerHTML=`
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

      ${g()}
    </div>
  `;const o=s.querySelector("main");return p().forEach(n=>{o.insertAdjacentElement("beforebegin",n)}),s},N=()=>{const t=c.state.user,s=document.createElement("div");s.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),s.innerHTML=`
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

      ${g()}
    </div>
  `;const o=p(),l=s.querySelector("main");o.forEach(e=>{l.insertAdjacentElement("beforebegin",e)});const n=e=>{if(e.target.id!=="profile-form")return;e.preventDefault();const a=new FormData(e.target),i=a.get("username");if(!i){alert("이름을 입력해주세요.");return}const r=a.get("email");if(r&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){alert("이메일 형식이 올바르지 않습니다.");return}const w=a.get("bio"),x={username:i,email:r,bio:w};c.updateUser(x),alert("프로필이 업데이트 되었습니다.")};return s.addEventListener("submit",n),s},S=()=>{const t=f(),s=l=>{if(l.target.id!=="login-form")return;l.preventDefault();const e=new FormData(l.target).get("username");if(!e){alert("이름을 입력해주세요.");return}const a={username:e,email:"",bio:""};c.setUser(a),alert("로그인 성공"),t.push("/profile")},o=document.createElement("main");return o.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),o.innerHTML=`
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
  `,o.addEventListener("submit",s),o},P=()=>{const t=document.createElement("main");return t.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),t.innerHTML=`
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      ${u({to:"/",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold",children:"홈으로 돌아가기"})}
    </div>
  `,t};export{S as L,$ as M,P as N,N as P,E as a,L as b,y as c,c as s};
