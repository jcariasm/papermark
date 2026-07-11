export const PREMIUM_TEAM_LIMIT = 5;

export async function getPremiumTeamEligibility(_userId: string) {
  return {
    isPremiumAdmin: false,
    canCreate: false,
    teamCount: 0,
    teamLimit: PREMIUM_TEAM_LIMIT,
  };
}
