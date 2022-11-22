import { useContext, useState } from "react";
import { Case } from "../../../../about-me-service/AboutMeContext";
import TabView from "../../../../components/TabView";
import PhraseContext from "../../../../phrase/PhraseContext";
import { groupBy } from "../../../../util";
import CaseView from "./CaseView";

const StatusHintMapping: Record<string, string> = {
	'approved': 'inprogress',
	'rejected': 'inprogress',
	'closed': 'closed',
	'incomplete': 'todo'
}

const CasesTabView = ({cases}: {cases: Case[]}) => {
	const {phrase} = useContext(PhraseContext)

	const [groupedCases] = useState(groupBy(cases, ({statusHint}) => StatusHintMapping[statusHint || 'approved'] || StatusHintMapping['approved']))

	const [tabs] = useState([{
		label: phrase('cases.grouping.todo', 'Att Göra'),
		tabContent: () => <>{groupedCases['todo']?.map(c => <CaseView data={c} />)}</>
	}, {
		label: phrase('cases.grouping.inprogress', 'Pågående'),
		tabContent: () => <>{groupedCases['inprogress']?.map(c => <CaseView data={c} />)}</>
	}, {
		label: phrase('cases.grouping.closed', 'Avslutade'),
		tabContent: () => <>{groupedCases['closed']?.map(c => <CaseView data={c} />)}</>
	}])
	return (
		<TabView tabs={tabs} />
	)
}

export default CasesTabView
