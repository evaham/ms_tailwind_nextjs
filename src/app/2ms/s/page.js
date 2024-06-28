
export default function s() {
    const items = [
        { title: "행사코너1" },
        { title: "행사코너2" },
        { title: "행사코너3" },
        { title: "행사코너4" },
        { title: "행사코너5" },
        { title: "행사코너6" },
    ]

    return (
        <div className="sample block h-full">
            <div>
                <div className="sample__name flex items-center justify-center sticky top-0 bg-blue-900 z-50">
                    <span className="js_fontsize font-bold text-2xl">투게더POS</span>
                    <a onclick="location.href='tel:1577-4550'" className="sample__tel">
                        <img src="http://tdc-api-dev-3.togethers.kr:8082/2ms/img/ico_call.png" />
                    </a>
                </div>
                <div className="sample__tit">
                    <span>지현테스트</span>
                    <span className="sample__date popStartDate"></span>
                    <span className="popExDate"></span>
                    <input type="hidden" className="isDate" value="0" />
                </div>
            </div>

            <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
                <div className="scroll_btn swiper-wrapper" id="swiper-wrapper-f93484d181ebd2c10" aria-live="polite">
                    {items.map((item) => (
                        <div className="btn_comm btn_0 swiper-slide swiper-slide-active" role="group" aria-label="1 / 7">{item.title}</div>
                    ))}
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>


            <div>
                <div className="goods">
                    <ul id="js_changeList" className="goods__list goods__list--type2">
                        <li>
                            <div className="goods__card">
                                <div className="goods__imgbox">

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/7d4ebad9-5052-43a5-b478-32d53b6bafe4.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">백개사면 할인</div>
                                    <div className="goods__price">101</div>
                                    <div className="goods__name">사과입니다</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" >
                                <div className="goods__imgbox">

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/fc3237c2-ba1b-4d84-b873-e98844095636.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">두개사면 두개</div>
                                    <div className="goods__price">12</div>
                                    <div className="goods__name">매일에서나온피크닉음료수입니다</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card">
                                <div className="goods__imgbox">

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/0249ef3d-1350-440d-aa63-a3af0f2f2589.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice ">10.10,101</div>
                                    <div className="goods__price">1,000</div>
                                    <div className="goods__name">사과</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card">
                                <div className="goods__imgbox">

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/bf20814b-0aa5-4ed0-a8a7-40c88d52445e.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">3,000</div>
                                    <div className="goods__name">사과</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card">
                                <div className="goods__imgbox">

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/8a2aee78-70b0-420c-a7ca-17977f9cead1.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">2,000</div>
                                    <div className="goods__name">사과</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card">
                                <div className="goods__imgbox">

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/썬키스트_썬키스트-훼미리사과180ml_)8801105802108_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인입니다.</div>
                                    <div className="goods__price">2,000</div>
                                    <div className="goods__name">사과</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div>

            {/* <div style={"background:"}>
                <div className="goods">
                    <ul id="js_changeList" className="goods__list goods__list--type3">

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;e15a4700-6d75-4588-a702-a90f385a2c43.jpg&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;&quot;, &quot;&quot;, &quot;10999999&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>
                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/e15a4700-6d75-4588-a702-a90f385a2c43.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">10,999,999</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;5437d4de-e752-4299-ac1b-c5e7b2ba110a.jpg&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;&quot;, &quot;&quot;, &quot;59999999&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>
                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/5437d4de-e752-4299-ac1b-c5e7b2ba110a.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">59,999,999</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;d464eff9-692f-4da3-a1fb-850693dc3f9a.jpg&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;&quot;, &quot;&quot;, &quot;3000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>
                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/d464eff9-692f-4da3-a1fb-850693dc3f9a.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">3,000</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;e9f2dd6d-ab7e-4844-ae23-aa4e082940b0.jpg&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;할인조건입니다&quot;, &quot;&quot;, &quot;2000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/e9f2dd6d-ab7e-4844-ae23-aa4e082940b0.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건입니다</div>
                                    <div className="goods__price">2,000</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;할인조건있음&quot;, &quot;&quot;, &quot;10000&quot;, &quot;https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_자색고구마튀김-200g_39189_1.png&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_자색고구마튀김-200g_39189_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건있음</div>
                                    <div className="goods__price">10,000</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;&quot;,&quot;%EA%B3%A0%EA%B5%AC%EB%A7%88&quot; ,&quot;&quot;, &quot;&quot;, &quot;20000000&quot;, &quot;https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_깐고구마순-0_201126_1.png&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_깐고구마순-0_201126_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">20,000,000</div>
                                    <div className="goods__name">고구마</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="1" />







                </div>
            </div> */}

            {/* <div style={"background:"}>
                <div className="goods">
                    <ul id="js_changeList" className="goods__list goods__list--type4">

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;ce70de32-9a34-4b09-94e9-f989947a8702.jpg&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;할인조건&quot;, &quot;&quot;, &quot;10000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/ce70de32-9a34-4b09-94e9-f989947a8702.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건</div>
                                    <div className="goods__price">10,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;da6d3671-27dd-42fd-8fdd-b865083a277b.jpg&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;할인조건있어요&quot;, &quot;&quot;, &quot;59999999&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/da6d3671-27dd-42fd-8fdd-b865083a277b.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건있어요</div>
                                    <div className="goods__price">59,999,999</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;126bc10a-4312-4630-ad93-aa4c24307dfb.jpg&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;&quot;, &quot;30000000&quot;, &quot;1000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/126bc10a-4312-4630-ad93-aa4c24307dfb.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice ">30,000,000</div>
                                    <div className="goods__price">1,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;84cb08e2-f91a-4392-82b1-9720885628bb.jpg&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;&quot;, &quot;&quot;, &quot;40000000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/84cb08e2-f91a-4392-82b1-9720885628bb.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">40,000,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;338c0cbc-020d-445f-ac83-4eda326d4fa2.jpg&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;&quot;, &quot;&quot;, &quot;10101010&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/338c0cbc-020d-445f-ac83-4eda326d4fa2.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">10,101,010</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;&quot;, &quot;&quot;, &quot;10000000&quot;, &quot;https://s3.ap-northeast-2.amazonaws.com/products.key/main/부스트_감자_1_1.jpg&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/부스트_감자_1_1.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">10,000,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;하나사면하나더&quot;, &quot;&quot;, &quot;1000&quot;, &quot;https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_감자납작당면-600g_22016690_1.png&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_감자납작당면-600g_22016690_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">하나사면하나더</div>
                                    <div className="goods__price">1,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;&quot;,&quot;%EA%B0%90%EC%9E%90&quot; ,&quot;&quot;, &quot;&quot;, &quot;20000&quot;, &quot;https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_미니감자-0_0013120000263_1.png&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/0_미니감자-0_0013120000263_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice "></div>
                                    <div className="goods__price">20,000</div>
                                    <div className="goods__name">감자</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="1" />







                </div>
            </div> */}

            {/* <div style={"background:"}>
                <div className="goods">
                    <ul id="js_changeList" className="goods__list ">

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;db44f9ba-9a0f-4c22-adaf-6c8f45d3de72.jpg&quot;,&quot;%EB%8B%B9%EA%B7%BC&quot; ,&quot;할인조건있습니&quot;, &quot;&quot;, &quot;1000&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/db44f9ba-9a0f-4c22-adaf-6c8f45d3de72.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건있습니</div>
                                    <div className="goods__price">1,000</div>
                                    <div className="goods__name">당근</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView(&quot;4003358a-57d4-405b-bc80-836226aa1083.jpg&quot;,&quot;%EB%8B%B9%EA%B7%BC&quot; ,&quot;&quot;, &quot;19999999&quot;, &quot;40099999&quot;, &quot;&quot;)">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/4003358a-57d4-405b-bc80-836226aa1083.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice ">19,999,999</div>
                                    <div className="goods__price">40,099,999</div>
                                    <div className="goods__name">당근</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="1" />
                </div>
            </div> */}

            {/* <div>
                <div className="goods">
                    <ul id="js_changeList" className="goods__list goods__list--style2">
                        <li>
                            <div className="goods__card" onclick="jsLargerView('5c898d20-e935-4e9e-91e3-e6cddada1696.jpg','%ED%99%8D%EC%8B%9C','할인조건입니다', '', '100000', '')">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/5c898d20-e935-4e9e-91e3-e6cddada1696.jpg" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice previewEtc1">할인조건입니다</div>
                                    <div className="goods__price">100,000</div>
                                    <div className="goods__name">홍시</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView('','%ED%99%8D%EC%8B%9C','', '10099999', '1000000', 'https://s3.ap-northeast-2.amazonaws.com/products.key/main/청도_냉동홍시-2.3kg_2500000275654_1.png')">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="https://s3.ap-northeast-2.amazonaws.com/products.key/main/청도_냉동홍시-2.3kg_2500000275654_1.png" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__delprice ">10,099,999</div>
                                    <div className="goods__price">1,000,000</div>
                                    <div className="goods__name">홍시</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="2" />
                </div>
            </div> */}

            {/* <div style="background:">
                <div className="goods">




                    <ul id="js_changeList" className="goods__list goods__list--style3">

                        <li>
                            <div className="goods__card" onclick="jsLargerView('','%EA%B3%A0%EA%B5%AC%EB%A7%88%EC%9E%85%EB%8B%88%EB%8B%A4','', '10000000', '10000000', '')">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__name">고구마입니다</div>
                                    <div className="goods__delprice ">10,000,000</div>
                                    <div className="goods__price">10,000,000</div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="goods__card" onclick="jsLargerView('','%EA%B0%90%EC%9E%90%EC%9E%85%EB%8B%88%EB%8B%A4','하나사면하나더', '', '1000000', '')">
                                <div className="goods__imgbox" style={"background:white"}>

                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/" />
                                </div>
                                <div className="goods__info">
                                    <div className="goods__name">감자입니다</div>
                                    <div className="goods__delprice previewEtc1">하나사면하나더</div>
                                    <div className="goods__price">1,000,000</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="3" />





                </div>
            </div> */}

            {/* <div style={"background:"}>
                <div className="goods">
                    <ul id="js_changeList5" className="goods__list" style={"padding:0;"}>

                        <li style={"padding:0; margin-bottom:15px;"}>
                            <div className="goods__card" style={"background:none; padding:0;"}>
                                <div className="goods__imgbox goods__imgbox--only">
                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/d-2247fdea-bbc9-4226-9cdf-69aa3489bd98.png" />
                                </div>
                            </div>
                        </li>

                        <li style="padding:0; margin-bottom:15px;">
                            <div className="goods__card" style={"background:none; padding:0;"}>
                                <div className="goods__imgbox goods__imgbox--only">
                                    <img src="http://tdc-api-dev-3.togethers.kr:2004/WebLink/448/d-bb5d1ca4-6bba-4835-bd25-65d291ebc2af.jpg" />
                                </div>
                            </div>
                        </li>

                    </ul>
                    <input type="hidden" className="templateType" value="5" />
                </div>
            </div> */}

            <div className="wrap_stickyfooter">
                <a className="btn_movecoupon slide-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="#fff" x="0px" y="0px" viewBox="0 0 24 24" style={{ marginRight: '5px' }}>
                        <path d="M12,21l-1.45-1.3c-1.683-1.517-3.075-2.825-4.175-3.925S4.4,13.688,3.75,12.812  S2.646,11.133,2.388,10.4S2,8.917,2,8.15c0-1.567,0.525-2.875,1.575-3.925S5.933,2.65,7.5,2.65c0.867,0,1.692,0.183,2.475,0.55  S11.433,4.083,12,4.75c0.567-0.667,1.242-1.183,2.025-1.55s1.608-0.55,2.475-0.55c1.567,0,2.875,0.525,3.925,1.575  C21.475,5.275,22,6.583,22,8.15c0,0.767-0.129,1.517-0.387,2.25c-0.258,0.733-0.713,1.538-1.363,2.413s-1.525,1.863-2.625,2.962  s-2.492,2.408-4.175,3.925L12,21z"></path>
                    </svg>
                    <span>할인쿠폰 도착!<br /><span>바로 사용 가능</span></span>
                </a>
                <a className="scroll_top btn_movetop">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff">
                        <path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path>
                    </svg>
                    <span>맨위로</span>
                </a>
            </div>
        </div>
    )
}