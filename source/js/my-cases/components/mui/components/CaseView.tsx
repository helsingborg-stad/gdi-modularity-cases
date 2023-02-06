import { Typography } from "@helsingborg-stad/municipio-react-ui";
import {
  Accordion,
  AccordionSummary,
  Stack,
  Chip,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Case } from "../../../../about-me-service/AboutMeContext";
import CaseEvents from "./CaseEvents";

const CaseView = ({
  data: { events, label, updateTime, status, statusHint, actions },
}: {
  data: Case;
}): JSX.Element => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Stack direction="column" spacing={0}>
        <Typography variant="h5" gutterBottom>
          {label}
        </Typography>
        <Typography variant="meta">{updateTime}</Typography>
      </Stack>
      <div className="u-margin__left--auto u-margin__right--2 u-margin__y--1">
        <Stack direction="row" alignItems="center" spacing={0}>
          <Typography className="u-margin__top--0">
            {status && <Chip label={status} />}
          </Typography>
        </Stack>
      </div>
    </AccordionSummary>
    <AccordionDetails className="u-color__bg--lighter u-padding__left--1 u-padding__right--2 u-padding__y--2">
      {events && <CaseEvents events={events ?? []} />}
    </AccordionDetails>
  </Accordion>
);

export default CaseView;
