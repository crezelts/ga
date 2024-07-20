import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div>
      <title>GwangminSite</title>
      <header className="flex p-10 bg-neutral-800">
        <h1 className="text-2xl relative font-bold text-blue-600">Gwangmin</h1>
        {/* <ul className="flex list-none text-white mt-1 ml-auto font-semibold transition duration-700 ease-in-out space-x-2">
          <a href="#" className="hover:bg-emerald-50 hover:text-black px-3 rounded-lg">
            <li className="line-through">회원가입</li>
          </a>
          <p>/</p>
          <a href="#" className="hover:bg-emerald-50 hover:text-black px-3 rounded-lg">
            <li className="line-through">로그인</li>
          </a>
        </ul> */}
      </header>
      <main>
        <ul className="list-none flex justify-center font-bold mt-0 border-2 py-2 space-x-2">
          <a href="/namuwiki"><li className="transition ease-in-out delay-50 hover:bg-green-400 hover:text-white rounded-lg px-2 py-1">gwangminwiki</li></a>
          {/* <a href="#"><li className="transition ease-in-out delay-50 rounded-lg px-2 py-1">Game<b className="text-red-600">(⚠️)</b></li></a> {/* add hover:bg-blue-400 hover:text-white */}
          <a href="/community"><li className="transition ease-in-out delay-50 rounded-lg px-2 py-1 hover:bg-blue-400 hover:text-white">Community<b className="text-red-600"></b></li></a> {/* add hover:bg-blue-400 hover:text-white + /community + hover:text-white */}
          <a href="/support"><li className="transition ease-in-out delay-50 hover:bg-blue-400 hover:text-white rounded-lg px-2 py-1">Support</li></a>
        </ul>
      </main>
      <article className="bg-black md:p-40 py-32">
        <span className="flex justify-center text-center relative -top-4 text-white text-5xl font-bold">Welcome to Gwangmin!</span>
        <span className="flex justify-center relative -top-2 text-white text-3xl font-bold text-center">Gwangmim angry.&nbsp;make happy.</span>
        <span className="flex justify-center relative top-6 text-white text-xl text-center">Please upload fun photos and videos of <br /> Gwangmin on the Gwangmin community.</span>
        <a className="flex justify-center text-xl relative top-14 text-sky-500 hover:text-sky-400" href="/community">Start now<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-5 h-5 mt-0.5 ml-2" /></a>
      </article>
      {/* 광민 소개 */}
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who is gwangmin?</h2>
            <p className="mt-4 text-gray-500">이광민은 대한민국 울산에 거주하며 언양고등학교에 재학 중인 학생입니다. 그는 축구를 즐겨하며, 그라운드에서 팀과 함께 뛰는 것을 좋아합니다. 또한, 이광민은 연하 나경이와 톡하는 것을 즐기며, 대화를 통해 많은 즐거움과 위로를 얻고 있습니다. 뿐만 아니라, 이광민은 학업에서도 뛰어난 성과를 보이고 있습니다. 그는 학교에서 항상 높은 성적을 유지하며, 다양한 과목에서 우수한 성취를 이루고 있습니다.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">이름</dt>
                <dd className="mt-2 text-sm text-gray-500">이광민</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">직위</dt>
                <dd className="mt-2 text-sm text-gray-500">2학년 1반 반장</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">여친</dt>
                <dd className="mt-2 text-sm text-gray-500">1학년 6반 김나경</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">진로</dt>
                <dd className="mt-2 text-sm text-gray-500">약사</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">취미</dt>
                <dd className="mt-2 text-sm text-gray-500">청소 순서 막 정하기, 남 때리기 <br /><b className="text-red-500">***나경이랑 데이트하기***</b></dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">좋아하는 팀</dt>
                <dd className="mt-2 text-sm text-blue-500 font-bold">울산 현대</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="/gwangmin_img3p.jpg" alt="img1" className="rounded-lg bg-gray-100" />
            <img src="/gwangmin_img4p.jpg" alt="img2" className="rounded-lg bg-gray-100" />
            <img src="/gwangmin_img5p.jpg" alt="img3" className="rounded-lg bg-gray-100" />
            <img src="/gwangmin_img6p.jpg" alt="img4" className="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

