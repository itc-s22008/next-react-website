import { pageISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function ConvartDate ({ dateISO }) {
  return (
    <time dateTite={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        locale: ja
      })}
    </time>
  )
}
