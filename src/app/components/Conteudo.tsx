'use client';

import { FloatButton } from 'antd';

import Card from "./Card";

export default function Content() {

  const goToEnd = () => {
    window.location.href = "#end";
  };

  const gotToTop = () => {
    window.location.href = "#top";
  }

  return (
    <div className="content">
      <nav className="flex flex-row gap-3 list-none h-11 items-center mt-3">
        <li onClick={goToEnd}>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </nav>

      <Card
        title="Titulo do Card"
        content="aqui será o conteúdo"
        link="https://picsum.photos/id/31/400/400" />

      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>
      <section id="end">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
      </section>


      <FloatButton onClick={gotToTop} type="primary" style={{ right: 24 }} />
    </div >
  )
}