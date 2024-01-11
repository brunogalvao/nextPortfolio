'use client';

import { FloatButton } from 'antd';
import { Anchor, ConfigProvider } from 'antd';

import Card from "./Card";
import Footer from './Footer';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function Content() {


  const gotToTop = () => {
    window.location.href = "#top";
  }

  return (
    <div className="content">
      <div className="content-wrapper">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#F97316',
            },
          }}
        >
        <Anchor
          direction="horizontal"
            className='h-20 backdrop-blur-md bg-white/30 flex items-center p-4'
          items={[
            {
              key: 'Home',
              href: '#Home',
              title: 'Home',
            },
            {
              key: 'Skill',
              href: '#Skill',
              title: 'Skill',
            },
            {
              key: 'Project',
              href: '#Project',
              title: 'Project',
            },
            {
              key: 'Contact',
              href: '#Contact',
              title: 'Contact',
            }
          ]}
        />

        </ConfigProvider>

        <section id='Home'>
          <h2 className='font-bold'>Home</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
        </section>
        
        <section id='Skill'>
          <h2 className='font-bold'>Skill</h2>
          <Card
            title="Titulo do Card"
            content="aqui será o conteúdo"
            link="https://picsum.photos/id/31/400/400" />
        </section>

        <section id='Project'>
            <h2 className='font-bold'>Project</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
        </section>

        <section id="Contact">
            <h2 className='font-bold'>Contatos</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis sint laborum, inventore consectetur perferendis nulla deserunt tempore voluptatum, magnam incidunt mollitia libero quod fugiat dolorum recusandae pariatur! Ab, voluptatem.
        </section>


        <FloatButton
          onClick={gotToTop}
          style={{ right: 20 }}
          icon={<ArrowUpOutlined className='text-orange-500' />}
          tooltip="Voltar ao inicio" />
      </div>
      
      <Footer />

    </div >
  )
}