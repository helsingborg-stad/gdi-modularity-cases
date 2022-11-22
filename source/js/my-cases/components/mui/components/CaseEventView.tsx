import { CaseEvent } from "../../../../about-me-service/AboutMeContext"
import CaseCard from "./CaseCard"

const CaseEventView = ({data}: {data: CaseEvent}): JSX.Element => (<CaseCard props={data}/>)

export default CaseEventView
