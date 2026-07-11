type TriggerOptions = {
  delay?: string;
  tags?: string[];
};

type TriggerTask<TPayload> = {
  trigger: (
    payload: TPayload,
    options?: TriggerOptions,
  ) => Promise<{ id: string }>;
};

function createNoopTask<TPayload>(name: string): TriggerTask<TPayload> {
  return {
    async trigger() {
      return { id: `noop-${name}` };
    },
  };
}

export const sendDataroomTrialInfoEmailTask = createNoopTask<{
  to: string;
  useCase: string;
  name: string;
}>("dataroom-trial-info");

export const sendDataroomTrial24hReminderEmailTask = createNoopTask<{
  to: string;
  name: string;
  teamId: string;
}>("dataroom-trial-24h-reminder");

export const sendDataroomTrialExpiredEmailTask = createNoopTask<{
  to: string;
  name: string;
  teamId: string;
}>("dataroom-trial-expired");
