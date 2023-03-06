import { useMemo } from 'react';
import AboutMeContext, { AboutMeContextType } from './about-me-service/AboutMeContext';
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'
import { createGqlContext } from './about-me-service/graphql/create-gql-context';
import MyCases from './my-cases/MyCases';

interface Props {
	aboutMeGraphQLUri: string;
	aboutMeGraphQLJson: string
}

const createFakeGQLContext = (cases: any[]): AboutMeContextType => ({
	listCases: async () => (cases || [])
})


function App({ aboutMeGraphQLUri, aboutMeGraphQLJson } : Props): JSX.Element {
	const provider = useMemo(() => 
		aboutMeGraphQLJson 
		? createFakeGQLContext(JSON.parse(aboutMeGraphQLJson))
		: aboutMeGraphQLUri 
		? createGqlContext(aboutMeGraphQLUri)
		: createFakeGQLContext([])
		, [aboutMeGraphQLUri, aboutMeGraphQLJson])

	return (
		<div className="App">
			<AboutMeContext.Provider value={provider}>
				<MyCases/>
			</AboutMeContext.Provider>
		</div>
		)
}

export default App
