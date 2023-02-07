import { Button, Typography } from "@helsingborg-stad/municipio-react-ui";
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
        <Typography as="h4" gutterBottom>
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
    <AccordionDetails className="u-color__bg--lighter u-padding__x--2 u-padding__y--4">
      {events && <CaseEvents events={events ?? []} />}
      {actions?.length &&
      events?.length &&
      events?.length > 0 &&
      actions?.length > 0 ? (
        <hr
          className="u-margin__y--3"
          style={{
            border: "solid 1px #0000000f",
            marginLeft: "-18px",
            marginRight: "-18px",
          }}
        />
      ) : null}
      {actions && actions.length > 0 && (
        <div className="u-display--flex u-justify-content--end">
          {actions.map(({ label, url }) => (
            <Button
              key="label-url"
              variant="filled"
              color="primary"
              href={url}
              target="_blank"
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </AccordionDetails>
  </Accordion>
);

export default CaseView;
