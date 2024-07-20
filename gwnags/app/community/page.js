const fetchPosts = async () => {
    try {
        const response = await fetch("https://gwangmins.netlify.app/api/crezelt", {
            cache: "no-store"
        })
        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Network response was not ok. Status: ${response.status}, Messages: ${errorText}`)
        }
        return response.json()
    } catch (error) {
        console.error("Fetch error:", error.message)
        throw error
    }
}

const Posts = async () => {
    const data = await fetchPosts()
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 relative -top-0.5">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">환영합니다! 여기서 재밌고 다양한 글을 올려주세요😊😊</p>
                        <a href="/add" className="font-bold relative top-10">작성하기</a>
                    </div>
                    {data.map((item) => (
                        <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <div className="text-gray-500">{item.formattedDates}</div>
                                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.emphasisPhrase}</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {item.title}
                                        </a>
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{item.content}</p>
                                </div>
                                <div className="relative mt-4 flex items-center gap-x-4">
                                    <img src={`/gwangmin_img${item.selectedNumber}p.jpg`} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                {item.username}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{item.Relationship}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts