"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Fix() {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [valid, setValid] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [emphasisPhrase, setEmphasisPhrase] = useState('');
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [relationship, setRelationship] = useState('');

    const handleNumberChange = (event) => {
        const num = parseInt(event.target.value);
        if (num >= 3 && num <= 13) {
            setSelectedNumber(num);
            setValid(true);
        } else {
            setSelectedNumber(null);
            setValid(false);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/crezelt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, emphasisPhrase, username, content, relationship, selectedNumber }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${errorText}`);
            }

            const result = await response.json();
            if (result.redirectUrl) {
                window.location.href = result.redirectUrl;
            } else {
                window.location.href = '/community';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setError(error.message);
        }
    };

    // 숙제: number 안 가져오는 문제 & date 뒤에 이상한 숫자 붙는 거 해결 + 사진 저장 기능 추가하기(로그인&회원가입) // complete!

    return (
        <>
            <title>작성지</title>
            <form onSubmit={handleSubmit}>
                <a href="/community"><FontAwesomeIcon icon={faArrowLeft} className="text-3xl flex text-white fixed top-3 w-9 h-9 ml-3 rounded-lg bg-zinc-600" /></a>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="flex justify-center">
                        <img className="inline-block w-24 h-24 ring-4 ring-blue-400 rounded-full" src="/gwangmin_img8p.jpg" alt="" />
                    </div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please enter your form</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* title */}
                        <div>
                            <label htmlFor="title" className="block text-base font-medium leading-6 text-gray-900">title</label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    autoComplete="title"
                                    placeholder="제목을 입력해주세요"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Emphasis phrase */}
                        <div>
                            <div className="flex items-center justify-between mt-3">
                                <label htmlFor="Emphasisphrase" className="block text-base font-medium leading-6 text-gray-900">Emphasis phrase</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="Emphasisphrase"
                                    name="Emphasisphrase"
                                    type="text"
                                    autoComplete="Emphasisphrase"
                                    placeholder="강조 문구를 넣어주세요"
                                    required
                                    value={emphasisPhrase}
                                    onChange={(e) => setEmphasisPhrase(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* username */}
                        <div>
                            <div className="flex items-center justify-between mt-3">
                                <label htmlFor="username" className="block text-base font-medium leading-6 text-gray-900">username</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    placeholder="사용할 이름을 입력해주세요"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* content */}
                        <div>
                            <div className="flex items-center justify-between mt-3">
                                <label htmlFor="content" className="block text-base font-medium leading-6 text-gray-900">content</label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="content"
                                    name="content"
                                    autoComplete="content"
                                    placeholder="내용을 입력해주세요"
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-32 pt-2 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>
                        {/* Relationship */}
                        <div>
                            <div className="flex items-center justify-between mt-3">
                                <label htmlFor="Relationship" className="block text-base font-medium leading-6 text-gray-900">Relationship</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="Relationship"
                                    name="Relationship"
                                    type="text"
                                    autoComplete="Relationship"
                                    placeholder="광민이와의 관계에 대해 입력해주세요"
                                    required
                                    value={relationship}
                                    onChange={(e) => setRelationship(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* file */}
                        {/* <div>
                            <div className="flex items-center justify-between mt-3">
                                <div htmlFor="file" className="block text-base font-medium leading-6 text-gray-900">file</div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="files"
                                    name="files"
                                    type="file"
                                    multiple
                                    placeholder="파일 업로드"
                                    value={files}
                                    onChange={(e) => setFiles(e.target.value.files)}
                                    required
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                        {/* (임시) 이미지 추가 */}
                        <div className='mt-5'>
                            <input
                                id="number"
                                name="number"
                                type="number"
                                autoComplete="number"
                                placeholder="3과 13사이의 숫자를 입력하세요"
                                onChange={handleNumberChange}
                                required
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                            {selectedNumber && (
                                <div>
                                    <p>선택된 숫자: {selectedNumber}</p>
                                    {/* 여기에 선택된 숫자에 따른 기능을 추가할 수 있습니다. */}
                                </div>
                            )}
                            {!valid && (
                                <p style={{ color: 'red' }}>입력된 숫자는 3과 13 사이여야 합니다.</p>
                            )}
                        </div>
                        <div>
                            <button type="submit" className="mt-8 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
                        </div>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                        <a href="/support" className="text-gray-500 hover:text-blue-600 font-bold" target="_blank">
                            <p className="mt-10 text-center text-sm">
                                문제가 있으시다면?
                            </p>
                        </a>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Fix;
