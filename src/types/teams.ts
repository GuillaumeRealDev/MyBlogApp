export class Team {
  id: number = 0
  team_id: number = 0
  created: Date = new Date()
  modified: Date = new Date()
  deleted: string | null = null
}

export class TeamsData {
  teams: Team[] = [
    {
      id: 1,
      team_id: 0,
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    },
    {
      id: 2,
      team_id: 3,
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    },
    {
      id: 3,
      team_id: 1,
      created: new Date(Date.now().toLocaleString()),
      modified: new Date(Date.now().toLocaleString()),
      deleted: null
    }
  ]
}
