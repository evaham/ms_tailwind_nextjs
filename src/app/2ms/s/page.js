
export default function s() {
    const items = [
        { id: 1, title: "행사코너1" },
        { id: 2, title: "행사코너2" },
        { id: 3, title: "행사코너3" },
        { id: 4, title: "행사코너4" },
        { id: 5, title: "행사코너5" },
        { id: 6, title: "행사코너6" },
    ];

    const goods =[
        { id: 1, preview:"상품소진시1", price:"19,999,999", name:"1빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/7d4ebad9-5052-43a5-b478-32d53b6bafe4.jpg"},
        { id: 2, preview:"상품소진시2", price:"29,999,999", name:"2빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/0249ef3d-1350-440d-aa63-a3af0f2f2589.jpg"},
        { id: 3, preview:"상품소진시3", price:"39,999,999", name:"3빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/fc3237c2-ba1b-4d84-b873-e98844095636.jpg"},
        { id: 4, preview:"상품소진시4", price:"49,999,999", name:"4빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/bf20814b-0aa5-4ed0-a8a7-40c88d52445e.jpg"},
        { id: 5, preview:"상품소진시5", price:"59,999,999", name:"5빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/8a2aee78-70b0-420c-a7ca-17977f9cead1.jpg"},
        { id: 6, preview:"상품소진시6", price:"69,999,999", name:"6빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"https://s3.ap-northeast-2.amazonaws.com/products.key/main/썬키스트_썬키스트-훼미리사과180ml_)8801105802108_1.png"},
        { id: 7, preview:"상품소진시7", price:"79,999,999", name:"7빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/8a2aee78-70b0-420c-a7ca-17977f9cead1.jpg"},
        { id: 8, preview:"상품소진시8", price:"89,999,999", name:"8빙그레)모짜렐라피자치즈240g 기획상품",imgurl:"http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/8a2aee78-70b0-420c-a7ca-17977f9cead1.jpg"},
    ]

    return (
        <div className="sample block h-full bg-slate-100">
            <div>
                <div className="sample__name flex items-center justify-center sticky top-0 p-4 bg-blue-900 text-white z-50">
                    <span className="js_fontsize flex-1 font-bold text-2xl text-center">투게더POS</span>
                    <a onclick="location.href='tel:1577-4550'" className="sample__tel flex justify-center w-8 h-8 ml-auto p-1 rounded-full bg-white">
                        <img src="http://tdc-api-dev-3.togethers.kr:8082/2ms/img/ico_call.png" alt="phone" />
                    </a>
                </div>
                <div className="sample__tit p-3 text-center bg-blue-50 text-slate-800">
                    <span className="text-xl">지현테스트</span>
                    <span className="sample__date popStartDate"></span>
                    <span className="popExDate"></span>
                    <input type="hidden" className="isDate" value="0" />
                </div>
            </div>

            <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden bg-white">
                <div className="scroll_btn swiper-wrapper flex" id="swiper-wrapper-f93484d181ebd2c10" aria-live="polite">
                    {items.map((item) => (
                        <div key={item.id} className="btn_comm btn_0 swiper-slide swiper-slide-active" role="group" aria-label="1 / 7">{item.title}</div>
                    ))}
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>


            <div>
                <div className="goods mt-2">
                    <ul id="js_changeList" className="goods__list goods__list--type2 grid grid-cols-2 gap-px mx-1 text-slate-800">
                        {goods.map((good) =>(
                            <li key={good.id}>
                                <div className="goods__card overflow-hidden flex flex-col border rounded-xl bg-white">
                                    <div className="goods__imgbox overflow-hidden flex items-center justify-center w-full h-36 p-1">
                                        <img className="max-wfull max-h-full" src={good.imgurl} alt="goods-image" />
                                    </div>
                                    <div className="goods__info flex flex-col items-center px-1 py-2">
                                        <div className="goods__delprice previewEtc1 text-blue-600 text-sm font-bold">{good.preview}</div>
                                        <div className="goods__price text-red-600 text-2xl font-extrabold">41,650,999</div>
                                        <div className="goods__name w-full h-10 mt-2 text-md text-center text-slate-700 text-ellipsis font-bold leading-5 line-clamp-2">{good.name}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div>

            <div>
                <div className="goods mt-2">
                    <ul id="js_changeList" className="goods__list goods__list--type2 grid grid-cols-3 gap-px mx-1 text-slate-800">
                        {goods.map((good) =>(
                            <li key={good.id}>
                                <div className="goods__card overflow-hidden flex flex-col border rounded-xl bg-white">
                                    <div className="goods__imgbox overflow-hidden flex items-center justify-center w-full h-36 p-1">
                                        <img className="max-wfull max-h-full" src={good.imgurl} alt="goods-image" />
                                    </div>
                                    <div className="goods__info flex flex-col items-center px-1 py-2">
                                        <div className="goods__delprice previewEtc1 text-blue-600 text-sm font-bold">{good.preview}</div>
                                        <div className="goods__price text-red-600 text-2xl font-extrabold">41,650,999</div>
                                        <div className="goods__name w-full h-10 mt-2 text-md text-center text-slate-700 text-ellipsis font-bold leading-5 line-clamp-2">{good.name}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div>

            <div>
                <div className="goods mt-2">
                    <ul id="js_changeList" className="goods__list goods__list--type2 grid grid-cols-4 gap-px mx-1 text-slate-800">
                        {goods.map((good) =>(
                            <li key={good.id}>
                                <div className="goods__card overflow-hidden flex flex-col border rounded-xl bg-white">
                                    <div className="goods__imgbox overflow-hidden flex items-center justify-center w-full h-36 p-1">
                                        <img className="max-wfull max-h-full" src={good.imgurl} alt="goods-image" />
                                    </div>
                                    <div className="goods__info flex flex-col items-center px-1 py-2">
                                        <div className="goods__delprice previewEtc1 text-blue-600 text-sm font-bold">{good.preview}</div>
                                        <div className="goods__price text-red-600 text-2xl font-extrabold">41,650,999</div>
                                        <div className="goods__name w-full h-10 mt-2 text-md text-center text-slate-700 text-ellipsis font-bold leading-5 line-clamp-2">입니다사과입니다</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div>

            <div>
                <div className="goods mt-2">
                    <ul id="js_changeList" className="goods__list goods__list--type2 grid gap-px mx-1 text-slate-800">
                        {goods.map((good) =>(
                            <li key={good.id}>
                                <div className="goods__card overflow-hidden flex flex-row border rounded-xl bg-white">
                                    <div className="goods__imgbox overflow-hidden flex items-center justify-center w-full h-36 p-1" style={{display:'none'}}>
                                        <img className="max-wfull max-h-full" src={good.imgurl} alt="goods-image" />
                                    </div>
                                    <div className="goods__info flex flex-col items-center px-1 py-2">
                                        <div className="goods__name w-full h-10 mt-2 text-md text-center text-slate-700 text-ellipsis font-bold leading-5 line-clamp-2">{good.name}</div>
                                        <div className="goods__delprice previewEtc1 text-blue-600 text-sm font-bold">{good.preview}</div>
                                        <div className="goods__price text-red-600 text-2xl font-extrabold">41,650,999</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div>
            <div className="wrap_stickyfooter sticky bottom-1">
                <a className="btn_movecoupon slide-in flex w-44 h-auto ml-auto p-3 rounded-tl-full rounded-bl-full text-white bg-rose-500 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="#fff" x="0px" y="0px" viewBox="0 0 24 24" style={{ marginRight: '5px' }}>
                        <path d="M12,21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925S4.4,13.688,3.75,12.812  S2.646,11.133,2.388,10.4S2,8.917,2,8.15c0-1.567,0.525-2.875,1.575-3.925S5.933,2.65,7.5,2.65c0.867,0,1.692,0.183,2.475,0.55  S11.433,4.083,12,4.75c0.567-0.667,1.242-1.183,2.025-1.55s1.608-0.55,2.475-0.55c1.567,0,2.875,0.525,3.925,1.575  C21.475,5.275,22,6.583,22,8.15c0,0.767-0.129,1.517-0.387,2.25c-0.258,0.733-0.713,1.538-1.363,2.413s-1.525,1.863-2.625,2.962  s-2.492,2.408-4.175,3.925L12,21z"></path>
                    </svg>
                    <span className="font-bold leading-4">할인쿠폰 도착!<br /><span className="font-normal text-xs">바로 사용 가능</span></span>
                </a>
                <a className="scroll_top btn_movetop flex flex-col items-center justify-center bg-slate-700 w-16 h-16 my-5 ml-auto rounded-full bg-opacity-90 ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff">
                        <path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path>
                    </svg>
                    <span className="text-xs text-slate-200 tracking-tighter">맨위로</span>
                </a>
            </div>
        </div>
    )
}