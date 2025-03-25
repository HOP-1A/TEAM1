"use client"
function Footer() {
  return (
    <div>
    
    <footer className='flex flex-col items-center w-full text-white pt-12 pb-5' style={{ backgroundColor: '#FF3476' }}>
      <div className='max-w-6xl mx-auto flex text-lg'>
      <div className='w-[160px] mr-40'>
          <img className="w-full max-w-auto mr-40" src="https://zary.mn/d1bbe99a59718a190b84bd47d0787533.png"/>
          <div className="flex mt-7">
            <img className="mr-[10px]" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtOC41NzIyNyA4LjU3MDMxaDE4Ljg1NzF2MTguODU3MWgtMTguODU3MXoiLz48L2NsaXBQYXRoPjxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIGZpbGw9IiNmZmYiIHI9IjE4Ii8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im04LjU3MjI3IDE4LjA1MTVjMCA0LjY4NzYgMy40MDQ1MyA4LjU4NTUgNy44NTcxMyA5LjM3NnYtNi44MDk4aC0yLjM1NzF2LTIuNjE4OGgyLjM1NzF2LTIuMDk1NWMwLTIuMzU3MiAxLjUxODgtMy42NjYyIDMuNjY2OS0zLjY2NjIuNjgwNSAwIDEuNDE0My4xMDQ1IDIuMDk0OC4yMDl2Mi40MDk4aC0xLjIwNDVjLTEuMTUyNyAwLTEuNDE0My41NzYtMS40MTQzIDEuMzA5OHYxLjgzMzFoMi41MTQzbC0uNDE4OCAyLjYxODhoLTIuMDk1NXY2LjgwOThjNC40NTI2LS43OTA1IDcuODU3MS00LjY4NzYgNy44NTcxLTkuMzc2IDAtNS4yMTQ4LTQuMjQyOC05LjQ4MTE5LTkuNDI4Ni05LjQ4MTE5LTUuMTg1NyAwLTkuNDI4NTMgNC4yNjYzOS05LjQyODUzIDkuNDgxMTl6IiBmaWxsPSIjZmYzNDY3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+"/>
            <img className="mr-[10px]" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiBmaWxsPSIjZmZmIiByPSIxOCIvPjxwYXRoIGQ9Im0xOC4wMDA4IDguNTcwMzFjLTUuMjA3MyAwLTkuNDI4NTMgNC4yMjEyOS05LjQyODUzIDkuNDI4NTlzNC4yMjEyMyA5LjQyODYgOS40Mjg1MyA5LjQyODZjNS4yMDc0IDAgOS40Mjg2LTQuMjIxMyA5LjQyODYtOS40Mjg2cy00LjIyMTItOS40Mjg1OS05LjQyODYtOS40Mjg1OXptMy44MzUzIDcuNzIzNTljLjAwMzkuMDgwNS4wMDQ5LjE2MTEuMDA0OS4yMzk2IDAgMi40NTU0LTEuODY3IDUuMjg0OS01LjI4MjkgNS4yODQ5LTEuMDA5NC4wMDE3LTEuOTk3Ny0uMjg4Mi0yLjg0NjMtLjgzNDguMTQ0NC4wMTc3LjI5MjcuMDI0Ni40NDMuMDI0Ni44NzAxIDAgMS42NzA2LS4yOTU3IDIuMzA2LS43OTQ2LS4zODcyLS4wMDc2LS43NjI0LS4xMzU4LTEuMDczMy0uMzY2OHMtLjU0Mi0uNTUzMi0uNjYxMS0uOTIxOGMuMjc4MS4wNTI5LjU2NDYuMDQxOC44Mzc3LS4wMzI0LS40MjAzLS4wODUtLjc5ODItLjMxMjctMS4wNjk4LS42NDQ2cy0uNDItLjc0NzQtLjQyMDEtMS4xNzYzdi0uMDIyNWMuMjUwNS4xMzg0LjUzNzMuMjIyOS44NDE3LjIzMjctLjM5NC0uMjYyMy0uNjczLS42NjUyLS43Nzk4LTEuMTI2NC0uMTA2OC0uNDYxMS0uMDMzMy0uOTQ1Ny4yMDUzLTEuMzU0NS40NjY0LjU3MzYgMS4wNDgyIDEuMDQyOCAxLjcwNzUgMS4zNzczczEuMzgxNS41MjY4IDIuMTE5OS41NjQ0Yy0uMDkzOS0uMzk4NC0uMDUzNS0uODE2Ny4xMTQ5LTEuMTg5OC4xNjg0LS4zNzMyLjQ1NTMtLjY4MDIuODE2Mi0uODczNHMuNzc1NS0uMjYxOCAxLjE3OTQtLjE5NWMuNDAzOS4wNjY3Ljc3NDQuMjY1IDEuMDUzOS41NjQuNDE1Ny0uMDgyMi44MTQyLS4yMzQ3IDEuMTc4Ni0uNDUwOC0uMTM4NS40MzAzLS40Mjg1Ljc5NTctLjgxNjEgMS4wMjgzLjM2ODEtLjA0NDMuNzI3Ni0uMTQzMyAxLjA2NjYtLjI5MzYtLjI0OS4zNzMxLS41NjI3LjY5ODctLjkyNjIuOTYxNXoiIGZpbGw9IiNmZjM0NjciLz48L3N2Zz4="/>
            <img className="mr-[10px]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzcxM180MCI+CiAgIDxyZWN0IGlkPSJzdmdfMSIgeD0iOC41NzIyNyIgeT0iOC41NzAzMSIgZmlsbD0id2hpdGUiIGhlaWdodD0iMTguODU3MSIgd2lkdGg9IjE4Ljg1NzEiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxjaXJjbGUgaWQ9InN2Z18yIiBmaWxsPSJ3aGl0ZSIgcj0iMTgiIGN5PSIxOCIgY3g9IjE4Ii8+CiAgPHBhdGggc3Ryb2tlPSJudWxsIiBmaWxsPSIjZmYzNDY3IiBpZD0ic3ZnXzUiIGQ9Im0xNy45OTQ1NzQsOS44OTk3NThjLTMuMDI4ODk2LDAgLTYuOTYwMTk2LDAuNzU4OTA5IC02Ljk2MDE5NiwwLjc1ODkwOWwtMC4wMDk4OTIsMC4wMTEzMDZjLTEuMzc5NTE5LDAuMjIwNjI3IC0yLjQzNjQyMiwxLjQwNjAzNiAtMi40MzY0MjIsMi44NDc2NzRsMCw0LjM0MTQ2NmwwLDAuMDAxNDEzbDAsNC4zNDAwNTNsMCwwLjAwMTQxM2EyLjg5NDMxMSwyLjg5NDMxMSAwIDAgMCAyLjQ0MzQ4OCwyLjg1MzMyN2wwLjAwMjgyNiwwLjAwNDI0YzAsMCAzLjkzMTMsMC43NjAzMjIgNi45NjAxOTYsMC43NjAzMjJjMy4wMjg4OTYsMCA2Ljk2MDE5NiwtMC43NjAzMjIgNi45NjAxOTYsLTAuNzYwMzIybDAuMDAxNDEzLC0wLjAwMTQxM2EyLjg5NDMxMSwyLjg5NDMxMSAwIDAgMCAyLjQ0NDkwMSwtMi44NTYxNTRsMCwtMC4wMDE0MTNsMCwtNC4zNDAwNTNsMCwtMC4wMDE0MTNsMCwtNC4zNDE0NjZhMi44OTQzMTEsMi44OTQzMTEgMCAwIDAgLTIuNDQzNDg4LC0yLjg1NDc0bC0wLjAwMjgyNiwtMC4wMDQyNGMwLDAgLTMuOTMxMywtMC43NTg5MDkgLTYuOTYwMTk2LC0wLjc1ODkwOXptLTIuMTcwNzMzLDQuNjI5NzY3bDUuNzg4NjIyLDMuMzI5NTg4bC01Ljc4ODYyMiwzLjMyOTU4OGwwLC02LjY1OTE3NnoiLz4KIDwvZz4KPC9zdmc+"/>
            <img className="mr-[10px]" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiBmaWxsPSIjZmZmIiByPSIxOCIvPjxwYXRoIGQ9Im0xNy41NzA4IDkuMTA5MzhjLTUuMTc4NiAwLTkuMzIxNDEgNC4xNDI4Mi05LjMyMTQxIDkuMzIxNDJzNC4xNDI4MSA5LjMyMTQgOS4zMjE0MSA5LjMyMTQgOS4zMjE0LTQuMTQyOCA5LjMyMTQtOS4zMjE0LTQuMTQyOC05LjMyMTQyLTkuMzIxNC05LjMyMTQyem0wIDcuMjUwMDJjMS4xMzkzIDAgMi4wNzE0LjkzMjEgMi4wNzE0IDIuMDcxNHMtLjkzMjEgMi4wNzE0LTIuMDcxNCAyLjA3MTQtMi4wNzE0LS45MzIxLTIuMDcxNC0yLjA3MTQuOTMyMS0yLjA3MTQgMi4wNzE0LTIuMDcxNHptMi45LTIuMDcxNWMwLS43MjUuNjIxNC0xLjI0MjggMS4yNDI5LTEuMjQyOC42MjE0IDAgMS4yNDI4LjYyMTQgMS4yNDI4IDEuMjQyOCAwIC42MjE1LS41MTc4IDEuMjQyOS0xLjI0MjggMS4yNDI5cy0xLjI0MjktLjUxNzktMS4yNDI5LTEuMjQyOXptLTIuOSAxMS4zOTI5Yy00LjAzOTMgMC03LjI1LTMuMjEwNy03LjI1LTcuMjVoMy4xMDcyYzAgMi4yNzg2IDEuODY0MiA0LjE0MjkgNC4xNDI4IDQuMTQyOXM0LjE0MjktMS44NjQzIDQuMTQyOS00LjE0MjloMy4xMDcxYzAgNC4wMzkzLTMuMjEwNyA3LjI1LTcuMjUgNy4yNXoiIGZpbGw9IiNmZjM0NjciLz48L3N2Zz4="/>
          </div>
        </div>
        <div className="fontNunito text-sm w-72">
          <h2 className='font-bold mb-2 text-lg'>zary.mn</h2>
          <div>
            <p className="mb-2">Бидний тухай</p>
            <p className="mb-2">Бүтээгдэхүүн үйлчилгээ</p>
            <p className="mb-2">Хамтын ажиллагаа</p>
            <p className="mb-2">Ажлын байр</p>
            <p className="mb-2">Артиклууд</p>
            <p className="mb-2">Зар нэмэх</p>
            <p className="mb-2">Нийтлэлүүд</p>
          </div>
        </div>
        <div className="fontNunito text-sm w-72">
          <h2 className='font-bold mb-2 text-lg'>Help</h2>
          <ul>
            <li className="mb-2">Тусламж</li>
            <li className="mb-2">Сэтгэгдэл үлдээх</li>
            <li className="mb-2">Түгээмэл асуулт, хариулт</li>
            <li className="mb-2">Үйлчилгээний нөхцөл</li>
            <li className="mb-2">Нууцлалын бодлого</li>
            <li className="mb-2">Аюулгүй ажиллагаа</li>
          </ul>
        </div>
        <div className="fontNunito text-sm w-72">
          <h2 className='font-bold mb-2'>Холбоо барих</h2>
          <ul>
            <li className="mb-2 text-wrap">Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Парисын гудамж 42, IC Tower, 10 давхар</li>
            <li className="mb-2">Утас:  7777-8984</li>
            <li className="mb-2">Имэйл: info@zary.mn</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-around mt-14 w-full fontNunito text-xs'>
        <div className='flex'>© 2025 Бүх эрх хуулиар хамгаалагдсан.</div>
        <div className='flex'>Developed by TEAM 1</div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;