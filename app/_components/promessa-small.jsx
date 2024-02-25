
// {
//   id: '1-educacao-e-formacao-9',
//   title: 'Educação e Formação / Começar Cedo: a Educação dos 0 aos 6 Anos de Idade / 9',
//   data: {
//     section: 'Educação e Formação',
//     sub_section: 'Começar Cedo: a Educação dos 0 aos 6 Anos de Idade',
//     accomplished: false,
//     accomplished_at: null,
//     link_to_news_article: null
//   },
//   html: '<p>Produzir orientações para o período 0-6 anos e proporcionar às instituições o acesso a materiais educativos adequados ao desenvolvimento nas áreas das linguagens (oral, escrita, artísticas e digitais), da matemática, das ciências e da motricidade;</p>\n'
// }

import Link from 'next/link'

export default function PromessaSmall({ hideSection = false, id, number, title, data: { accomplished_at, link_to_news_article, section, sub_section }, html }) {
  return (
    <div className="promessa mb-6">
      <div className="flex flex-row items-center">
        <Link href={`/p/${id}`} className="p-4">{accomplished_at ? '✅' : '❌'}</Link>
        <div>
          <div className="text-base text-gray-400 dark:text-gray-400 text-sm">
            {!hideSection && <Link href={`/s/${section}`} className="font-bold">{section}</Link>}
            <p>{sub_section}</p>
          </div>
          <div className="">
            <span className="" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </div>
  )
}
