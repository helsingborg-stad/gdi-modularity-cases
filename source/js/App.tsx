import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'
import MyCases from './my-cases/MyCases';

interface Props {
	aboutMeGraphQLUri: string;
}

function App({ aboutMeGraphQLUri } : Props): JSX.Element {
	return (
		<div className="App">
			<AboutMeProvider uri={aboutMeGraphQLUri}>
				<MyCases/>
			</AboutMeProvider>
		</div>
	)
}

export default App
