import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material"
import { CaseAction } from "../../../../about-me-service/AboutMeContext"

interface CaseCardProps {
	updateTime: string
	label?: string
	description?: string
	status?: string
	statusHint?: string
	actions?: CaseAction[],
	renderChildren?: () => JSX.Element
}

const CaseCard = ({
	props: {
		updateTime,
		label,
		description,
		status,
		statusHint,
		actions,
		renderChildren
	}
}: {props: CaseCardProps}): JSX.Element => (
	<Card>
	<CardContent>
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="flex-start"
			spacing={2}>
			<Typography variant="h5" gutterBottom>
				{label}
			</Typography>
			<Typography gutterBottom>
				<Stack>
					<Typography>{updateTime}</Typography>
					<Typography>
						{status && <Chip label={status}/>}
					</Typography>
				</Stack>
			</Typography>
		</Stack>

		<Typography gutterBottom>
			{description}
		</Typography>
		{renderChildren?.()}
		<CardActions>
			{actions?.map(({label, url}) => <Button target="_blank" href={url}>{label}</Button>)}
		</CardActions>
	</CardContent>
</Card>

)

export default CaseCard