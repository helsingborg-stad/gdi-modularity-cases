import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material"
import { useContext } from 'react'
import { CaseEvent } from '../../../../about-me-service/AboutMeContext'
import PhraseContext from '../../../../phrase/PhraseContext'
import CaseEventView from './CaseEventView'

const CaseEventsView = ({events}: {events?: CaseEvent[]}): JSX.Element | null => {
	const {phrase} = useContext(PhraseContext)
		
	return events && events?.length > 0 
		? (
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>{phrase('cases.events', 'Händelser i ärendet')}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Stack spacing={2}>
						{events?.map(e => <CaseEventView data={e} />)}
					</Stack>
				</AccordionDetails>
			</Accordion>
		)
		: null
}

	export default CaseEventsView
	