import React from 'react';

const AddAdvert = () => {
  return (
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Добавление Объявления</h1>

    <p className="mt-4 text-gray-500">
      Введите параметры недвижимости
    </p>
  </div>

  <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Название объявления</label>

      <div className="relative">
        <input
          type="email"
          className="w-full ml-16 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Название объявления"
        />
      </div>
    </div>
    
    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Тип помещения</label>

      <div className="relative">
      <div>

  <div class="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist"
      id="HeadlineAct"
      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
      placeholder="Тип помещения"
    />
  </div>

  <datalist name="HeadlineAct" id="HeadlineActArtist">
    <option value="Дом">Дом</option>
    <option value="Квартира">Квартира</option>
    <option value="Земельный участок">Земельный участок</option>
  </datalist>
</div>

      </div>
    </div>

    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Количество комнат</label>

      <div className="relative">
      <div>

  <div class="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist1"
      id="HeadlineAct1"
      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
      placeholder="Количество комнат"
    />
  </div>

  <datalist name="HeadlineAct1" id="HeadlineActArtist1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>

  </datalist>
</div>

      </div>
    </div>

    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Площадь</label>

      <div className="relative">
        <input
          type="email"
          className="w-full ml-36 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Площадь"
        />
      </div>
    </div>
    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Этаж</label>

      <div className="relative">
        <input
          type="email"
          className="w-full ml-44 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Этаж"
        />
      </div>
    </div>

    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Сервис</label>

      <div className="relative">
      <div>

  <div class="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist2"
      id="HeadlineAct2"
      class="w-full ml-16 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
      placeholder="Сервис"
    />
  </div>

  <datalist name="HeadlineAct2" id="HeadlineActArtist2">
    <option value="Аренда">Аренда</option>
    <option value="Покупка">Покупка</option>
    <option value="Посуточная аренда">Посуточная аренда</option>

  </datalist>
</div>

      </div>
    </div>


    <div className='mb-5 flex items-center'>
      <label htmlFor="email" className="">Цена</label>

      <div className="relative">
        <input
          type="email"
          className="w-full ml-44 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Цена"
        />
      </div>
    </div>

    <div className="flex items-center justify-center">
    

      <button
        type="submit"
        className="w-56 flex items-center justify-center inline-block rounded-lg bg-blue-500 px-5 py-3 text-xs text-white"
        onClick={(e) => {e.preventDefault(); window.location.replace("/upload")}}
      >
        Перейти к добавлению фото
      </button>
    </div>
  </form>
</div>
  );
};

export default AddAdvert;