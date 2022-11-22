import { Case } from "../../../../about-me-service/AboutMeContext"
import CaseCard from "./CaseCard"
import CaseEventsView from "./CaseEventsView"

const CaseView = ({data}: {data: Case}): JSX.Element => (
	<CaseCard props={{
		...data,
		renderChildren: () => (<CaseEventsView events={data.events} />)
		}}/>)

		export default CaseView
		