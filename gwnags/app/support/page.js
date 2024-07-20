"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function support() {
    const changeText = "abn0226@gmail.com"
    const [copy, setCopy] = useState(false)

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopy(true);
                setTimeout(() => setCopy(false), 3000);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    };
    return (
        <div>
            <title>광민 - support</title>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <a href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-3xl flex text-white fixed top-3 w-9 h-9 ml-3 rounded-lg bg-zinc-600" /></a>
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">이곳은 고객센터입니다. 여기서 궁금하거나 질문하고 싶으시다면 이곳에서 찾아보시고 질문해주시기 바랍니다.</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="https://www.instagram.com/woojin_cg/" className="text-pink-400" target="_blank">Instagram<span aria-hidden="true">&rarr;</span></a>
                            <a href="https://www.instagram.com/lgm09_24/" className="text-blue-400" target="_blank">@lgm09_24<span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Manager</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">1</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">passion to help</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300%</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Answer-time</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">8am ~ 12pm</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Answer-Satisfaction</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">99%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Email</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                어떤 부분을 추가하고 싶거나 문제가 있으시면 언제든지 밑에 있는 이메일을 통해서 물어봐주세요.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="pointer-events-none min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="abn0226@gmail.com"
                                />
                                <button
                                    type="submit"
                                    onClick={() => handleCopy(changeText)}
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    {copy ? "copied!" : "copy"}
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                        />
                                    </svg>
                                </div>
                                <dt className="mt-4 font-semibold text-white">Check-question</dt>
                                <dd className="mt-2 leading-7 text-gray-400">위에 나와 있는 것처럼 오전 8시부터 오후 12시까지 답변이 가능합니다. 다양하고 독특한 질문도 환영입니다!</dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                                        />
                                    </svg>
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">광민은 이메일을 활용하여 <br /> 스팸 문자를 보내지 않습니다.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
                </div>
            </div>
        </div>
    )
}

export default support;