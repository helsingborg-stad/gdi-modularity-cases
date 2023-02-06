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
          key={`${label}-${updateTime}`}
          title={label ?? description ?? ""}
          date={updateTime}
          {...(i === 0
            ? {
                active: true,
                description: label ? description : undefined,
                actions: actions.map(({ label, url }) => ({
                  text: label,
                  url,
                })),
              }
            : {})}
        />
      )
    )}
  </Timeline>
);

export default CaseEvents;
