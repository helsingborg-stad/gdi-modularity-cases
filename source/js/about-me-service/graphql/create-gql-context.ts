import axios from 'axios'
import { AboutMeContextType } from '../AboutMeContext'

const queryCases = `
query Cases {
  me {
    id
    cases {
      caseId
      description
      label
      statusHint
      subjectId
      updateTime
      status
      events {
        description
        status
        statusHint
        updateTime
        actions{
        	label
        	url
          typeHint
        }
      }
      actions{
        label
        url
        typeHint
      }
    }
  }
}
`
const gql = (uri: string, query: string, variables: object) => axios({
	method: 'post',
	url: `${uri}`,
	data: {
		query,
		variables,
	},
})

export const createGqlContext = (uri: string): AboutMeContextType => ({
	listCases: () => gql(uri, queryCases, {})
		.then(response => response?.data?.data?.me?.cases || [])
})
