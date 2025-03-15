import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-wrap h-[100vh]">
        <div className="w-[53vw] h-[16vh] text-[17px] font-normal flex flex-row gap-[25px] text-indigo-400  font-sans font-bold">
          <Button variant="link">Эрэлттэй</Button>
          <Button variant="link">Хямдралтай</Button>
          <Button variant="link">Шинэ</Button>
        </div>
        <div className="flex flex-row w-[53vw] h-[30vh] border-t-[1px] mt-[-55vh] gap-[12px]  ">
          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2841632/product/IMG_8017.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2236362/product/aventus_for_her.jpg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2834431/product/IMG_9859.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2755522/product/Apple_iPhone_16_Pro_Max.png"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2861905/product/IMG_7390.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2879692/product/481662675_1779757119467136_8459250323295014277_n.jpg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap h-[100vh] mt-[-65vh] ">
        <div className="w-[53vw] h-[3vh] text-[17px] font-normal flex flex-row gap-[25px] border-b-[1px] text-indigo-400 font-sans font-bold ">
          <Button variant="link" className="">
            Эмэгтэй
          </Button>
          <Button variant="link">Эрэгтэй</Button>
          <Button variant="link">Гоо сайхан</Button>
          <Button variant="link">Тавилга</Button>
          <Button variant="link">Гоёлын чимэглэл бараа</Button>
          <Button variant="link">Технологи</Button>
          <Button variant="link">Авто</Button>
          <Button variant="link">Утас</Button>
        </div>
        <div className="flex flex-row w-[53vw] h-[30vh] mt-[-48.5vh] gap-[12px]  ">
          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2841632/product/IMG_8017.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2236362/product/aventus_for_her.jpg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2834431/product/IMG_9859.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2755522/product/Apple_iPhone_16_Pro_Max.png"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2861905/product/IMG_7390.jpeg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>

          <div className="w-[10vw] h-[10vh] mt-[14px]">
            <div className="border-2 border-indigo-200 rounded-[1vh] ">
              <img
                src="https://cdnp.cody.mn/spree/images/2879692/product/481662675_1779757119467136_8459250323295014277_n.jpg"
                className="w-[10vw] h-[16vh] border-b-[1px] mt-[10px]"
              />
              <div className="ml-[10px] font-sans mt-[10px] ">
                <div className="flex flex-row gap-[60px]">
                  <h6 className="text-[12px] text-[gray]">23 өдрийн өмнө</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16.5 14"
                    fill="currentColor"
                  >
                    <path
                      d="M15.839 2.918a4.644 4.644 0 0 0-1.016-1.478A4.738 4.738 0 0 0
                11.494.086 4.77 4.77 0 0 0 8.5 1.141 4.77 4.77 0 0 0 5.504.086
                4.738 4.738 0 0 0 2.177 1.44a4.615 4.615 0 0 0-1.39 3.298c0
                .594.12 1.214.362 1.844.201.527.49 1.074.86 1.625.586.874 1.391
                1.784 2.391 2.708a26.732 26.732 0 0 0 3.368
                2.63l.424.271c.187.12.428.12.616 0l.423-.271c.07-.045 1.709-1.1
                3.368-2.63 1-.924 1.805-1.834
                2.39-2.708.37-.551.661-1.098.861-1.625.241-.63.363-1.25.363-1.844a4.547
                4.547 0 0 0-.373-1.82zm-7.34 9.486S2.142 8.33 2.142 4.738c0-1.82
                1.506-3.295 3.363-3.295 1.305 0 2.437.729 2.994 1.793a3.372
                3.372 0 0 1 2.995-1.793c1.857 0 3.363 1.475 3.363 3.295 0
                3.593-6.358 7.666-6.358 7.666z"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-600 mt-[6px]">Сувдтай зүүлт</h4>
                <div className="text-black-600 mt-[20px]">19,500 ₮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
