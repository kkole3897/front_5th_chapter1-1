(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const m="router-link";let b=[],c="history";const v=t=>(b=t,c="history",o=>{const a=s=>{if(!o)return;const r=t.find(l=>l.path===s),i=t.find(l=>l.path==="*");if(o.innerHTML="",r){o.appendChild(r.component());return}else if(i){o.appendChild(i.component());return}};document.addEventListener("click",s=>{if(s.target.dataset.link===m){s.preventDefault();const r=s.target.href;window.history.pushState(null,"",r);const i=r.replace(window.location.origin,"");a(i)}}),window.addEventListener("popstate",()=>{const s=window.location.pathname;a(s)});const n=window.location.pathname;a(n)}),p=()=>({push:e=>{c==="history"?(window.history.pushState(null,"",e),window.dispatchEvent(new Event("popstate"))):window.location.hash=e},replace:e=>{c==="history"?(window.history.replaceState(null,"",e),window.dispatchEvent(new Event("popstate"))):window.location.hash=e}}),y=()=>({pathname:c==="history"?window.location.pathname:(window.location.hash||"/").replace("#","")}),u=t=>`<a href="${c==="history"?t.to:`#${t.to}`}" data-link="${m}" ${t.className?`class="${t.className}"`:""}>${t.children??""}</a>`,f=t=>{var e;return c==="history"?t.replace?window.history.replaceState(null,"",t.to):window.history.pushState(null,"",t.to):(t.replace,window.location.hash=t.to),(e=b.find(o=>o.path===t.to))==null?void 0:e.component()},d={state:{user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null},setUser(t){if(!t){this.state.user=null,localStorage.removeItem("user");return}this.state.user=t,localStorage.setItem("user",JSON.stringify(t))},updateUser(t){this.state.user&&(this.state.user={...this.state.user,...t},localStorage.setItem("user",JSON.stringify(this.state.user)))},isLoggedIn(){return this.state.user!==null}},h=()=>{const t=p(),e=y(),o=d.isLoggedIn(),a=e.pathname,n=document.createElement("header");n.classList.add("bg-blue-600","text-white","p-4","sticky","top-0"),n.innerHTML=`
    <h1 class="text-2xl font-bold">항해플러스</h1>
  `;const s=o?`
      <li>${u({to:"/",className:a==="/"?"text-blue-600 font-bold":"text-gray-600",children:"홈"})}</li>
      <li>${u({to:"/profile",className:a==="/profile"?"text-blue-600 font-bold":"text-gray-600",children:"프로필"})}</li>
      <li><a href="#" id="logout" type="button" class="text-gray-600">로그아웃</a></li>
    `:`
      <li>${u({to:"/",className:a==="/"?"text-blue-600":"text-gray-600",children:"홈"})}</li>
      <li>${u({to:"/login",className:"text-gray-600",children:"로그인"})}</li>
    `,r=document.createElement("nav");r.classList.add("bg-white","shadow-md","p-2","sticky","top-14"),r.innerHTML=`
    <ul class="flex justify-around">
      ${s}
    </ul>
  `;const i=l=>{l.target.id==="logout"&&(l.preventDefault(),d.setUser(null),alert("로그아웃 되었습니다."),t.push("/login"))};return r.addEventListener("click",i),[n,r]},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=()=>{const t=d.isLoggedIn(),e=document.createElement("div");e.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),e.innerHTML=`
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
  `;const o=e.querySelector("main");return h().forEach(n=>{o.insertAdjacentElement("beforebegin",n)}),e},E=()=>{const t=d.state.user,e=document.createElement("div");e.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),e.innerHTML=`
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
  `;const o=h(),a=e.querySelector("main");o.forEach(s=>{a.insertAdjacentElement("beforebegin",s)});const n=s=>{if(s.target.id!=="profile-form")return;s.preventDefault();const r=new FormData(s.target),i=r.get("username");if(!i){alert("이름을 입력해주세요.");return}const l=r.get("email");if(l&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){alert("이메일 형식이 올바르지 않습니다.");return}const w=r.get("bio"),x={username:i,email:l,bio:w};d.updateUser(x),alert("프로필이 업데이트 되었습니다.")};return e.addEventListener("submit",n),e},$=()=>{const t=p(),e=a=>{if(a.target.id!=="login-form")return;a.preventDefault();const s=new FormData(a.target).get("username");if(!s){alert("이름을 입력해주세요.");return}const r={username:s,email:"",bio:""};d.setUser(r),alert("로그인 성공"),t.push("/profile")},o=document.createElement("main");return o.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),o.innerHTML=`
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
  `,o.addEventListener("submit",e),o},S=()=>{const t=document.createElement("main");return t.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),t.innerHTML=`
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      ${u({to:"/",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold",children:"홈으로 돌아가기"})}
    </div>
  `,t},N=t=>({render:o=>{o(t)}}),I=t=>()=>d.isLoggedIn()?t():f({to:"/login",replace:!0}),P=t=>()=>d.isLoggedIn()?f({to:"/",replace:!0}):t(),j=document.getElementById("root"),D=v([{path:"/",component:L},{path:"/profile",component:I(E)},{path:"/login",component:P($)},{path:"*",component:S}]);N(j).render(D);
