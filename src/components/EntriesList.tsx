import { EntriesProp } from "./Body"
import ContentWrapper from "./ContentWrapper"
import EntriesListItems from "./EntriesListItems"


const EntriesList = ({ entries }: { entries: EntriesProp[] }) => {
  return (
    <ContentWrapper title="Recent Crashes">
        {entries.map(entry=> <EntriesListItems key={entry.id} entry={entry} />)}
    </ContentWrapper>
  )
}

export default EntriesList