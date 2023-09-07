type User = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
  processes: Process[]
  stages: Stage[]
  teams: Team[]
  accessToken?: string
}

interface Team {
  id: string
  name: string
  users: { user: User }[]
  processes: Process[]
}

type Process = {
  id: string
  name: string
  stage: Stage
  subProcesses: SubProcess[]
  createdAt: string
  updatedAt: string
  userId: string
  teamId: string
}

type SubProcess = {
  id: string
  name: string
  stage: Stage
  createdAt: string
  updatedAt: string
  processId: string
}

type Stage = {
  id: string
  name: string
  color: string
  processes: Process[]
  createdAt: string
  updatedAt: string
  processId: string
}

export default User
export type {
  Team, Process, SubProcess, Stage,
}
