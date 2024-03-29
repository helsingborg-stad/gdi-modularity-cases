import { Timeline } from "@helsingborg-stad/municipio-react-ui";
import { CaseEvent } from "../../../../about-me-service/AboutMeContext";
import CaseEventView from "./CaseEventView";

const CaseEvents = ({ events }: { events: CaseEvent[] }) => (
  <Timeline>
    {events.map(
      (
        { label, updateTime, description, actions = [], status, statusHint },
        i
      ) => (
        <CaseEventView
          active={i === 0}
          key={`${label}-${updateTime}`}
          title={label ?? description ?? ''}
          date={
            Date.parse(updateTime)
              ? new Date(updateTime).toLocaleDateString("sv-se")
              : updateTime
          }
          description={description && label ? description : undefined}
          actions={actions.map(({ label, url }) => ({
            text: label,
            url,
          }))}
        />
      )
    )}
  </Timeline>
);

export default CaseEvents;
