import {
  Typography,
  TimelineItem,
  TimelineConnector,
  TimelineBody,
  TimelineHeader,
  TimelineTitle,
  Button,
} from "@helsingborg-stad/municipio-react-ui";

const CaseEventView = ({
  title,
  date,
  description = undefined,
  active = false,
  actions = [],
}: {
  title: string;
  date: string;
  description?: string;
  active?: boolean;
  actions?: {
    text: string;
    url: string;
  }[];
}) => (
  <TimelineItem active={active} muted={!active}>
    <TimelineConnector />
    <TimelineBody>
      <TimelineHeader>
        <div className="o-grid u-justify-content--center u-align-items--center">
          <div className="o-grid-auto">
            <TimelineTitle as="h4">{title}</TimelineTitle>
            {description && (
              <div>
                <Typography as="p" variant="meta">
                  {description}
                </Typography>
              </div>
            )}

            {actions.map(({ text, url }, i) => (
              <Button key={`${text}-${url}`} as="a" href={url} variant="basic">
                {text}
              </Button>
            ))}
          </div>
          <div className="o-grid-fit u-align-self--start">
            <Typography as="p" variant="meta" gutterTop={false}>
              {date}
            </Typography>
          </div>
        </div>
      </TimelineHeader>
    </TimelineBody>
  </TimelineItem>
);

export default CaseEventView;
