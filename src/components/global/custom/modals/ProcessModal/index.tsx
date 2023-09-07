import { useState } from 'react'

// Models
import { Process, Stage, SubProcess } from 'src/models/user'

// Store
import { useAppDispatch, useAppSelector } from 'src/store/reducers'

// Components
import {
  Button,
  Input,
  SelectInput,
  Modal,
} from 'src/components/global/standard'

// Styles
import { setUser } from 'src/store/slices/userSlice'
import ProcessModalForm from './ProcessModalStyles'

type ProcessModalProps = {
  processId?: string
  title: string
  teamId: string
  userProcess?: SubProcess | Process
  onCloseModal: () => void
}

function ProcessModal({
  title,
  processId,
  teamId,
  userProcess,
  onCloseModal,
}: ProcessModalProps) {
  const token = localStorage.getItem('m-token')

  const dispatch = useAppDispatch()

  // Store
  const user = useAppSelector(state => state.user)

  // States
  const [processForm, setProcessForm] = useState({
    id: userProcess?.id || '',
    name: userProcess?.name || '',
    stage: userProcess?.stage || user.stages[0],
    teamId: teamId || '',
    processId: processId || '',
  })

  // Handlers
  function handleFormChange(field: string, value: string | Stage) {
    setProcessForm(prevAuthForm => ({
      ...prevAuthForm,
      [field]: value,
    }))
  }
  async function handleDeleteProcess(event) {
    event.preventDefault()

    try {
      if (!processId) {
        const userData = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/processes/${userProcess.id}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
        ).json()

        console.log(userData)
      } else {
        const userData = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sub-processes/${processId}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
        ).json()

        console.log(userData)
      }
    } catch (error) {
      console.error(error)
    } finally {
      onCloseModal()
    }
  }
  async function handleSubmitProcess(event) {
    event.preventDefault()

    try {
      if (!processId) {
        const updatedUser = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/processes${userProcess?.id ? `/${userProcess?.id}` : ''}`, {
            method: userProcess?.id ? 'PATCH' : 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: processForm.name,
              stageId: processForm.stage.id,
              teamId,
              userId: user.id,
            }),
          })
        ).json()

        dispatch(setUser(updatedUser))
      } else {
        const updatedUser = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sub-processes${userProcess?.id ? `/${userProcess?.id}` : ''}`, {
            method: userProcess?.id ? 'PATCH' : 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: processForm.name,
              stageId: processForm.stage.id,
              processId,
            }),
          })
        ).json()

        dispatch(setUser(updatedUser))
      }
    } catch (error) {
      console.error(error)
    } finally {
      onCloseModal()
    }
  }

  return (
    <Modal title={title} onCloseModal={onCloseModal}>
      <ProcessModalForm onSubmit={event => handleSubmitProcess(event)}>
        <div className="fields-group">
          <Input
            title="Nome"
            name="name"
            value={processForm.name}
            onChange={e => handleFormChange(e.target.name, e.target.value)}
          />
          <SelectInput
            title="Etapa"
            name="stage"
            value={processForm.stage.name}
            onChange={e => handleFormChange(
              e.target.name,
              user.stages.find(
                (stage: Stage) => stage.name === e.target.value,
              ),
            )}
            options={user.stages.map(stage => ({
              name: stage.name,
              value: stage.name,
            }))}
          />
          {processId && (
            <Input
              title="Processo"
              name="processId"
              value={
                user.processes.find(process => process.id === processId)?.name || ''
              }
              onChange={e => handleFormChange(e.target.name, e.target.value)}
              disabled={!!processId}
            />
          )}

          <Input
            title="Time"
            name="processId"
            value={
              user.teams?.find(userTeam => userTeam.id === teamId)?.name || ''
            }
            onChange={e => handleFormChange(e.target.name, e.target.value)}
            disabled={!!teamId}
          />
        </div>

        <div className="actions">
          <Button type="submit">
            {userProcess?.id ? 'Salvar' : 'Adicionar'}
          </Button>

          {userProcess?.id ? (
            <Button
              variant="dangerous"
              type="button"
              onClick={event => handleDeleteProcess(event)}
            >
              Excluir
            </Button>
          ) : null}
        </div>
      </ProcessModalForm>
    </Modal>
  )
}

export default ProcessModal
