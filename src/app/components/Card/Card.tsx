import Image from 'next/image'

export default function Card(props: { title: string, content: string, link: string }) {
  return (
    <div className="card">
      <div className="card-header py-3">
        <span className="card-title font-bold text-lg">{props.title}</span>
      </div>
      <div className="card-body flex-row bg-slate-100 justify-between items-center p-3">
        <p className="card-text">{props.content}</p>
        <Image
          className="card-link rounded-full shadow-lg"
          src={props.link}
          width={120}
          height={120}
          alt="Picture of the author"
        />
      </div>
      <button className='bg-orange-400 rounded-md p-2 mt-3 w-full text-white'>clique aqui</button>
    </div>
  )
}