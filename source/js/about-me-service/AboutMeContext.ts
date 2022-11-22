import React from 'react'


export interface Case {
	caseId: string
	subjectId: string
	updateTime: string
	label?: string
	description?: string
	status?: string
	statusHint?: string
	events?: CaseEvent[]
	actions?: CaseAction[]
}
export interface CaseEvent {
	updateTime: string
	label?: string
	description?: string
	status?: string
	statusHint?: string
	actions?: CaseAction[]
}

export interface CaseAction {
	label: string
	url: string
	typeHint?: string
}



export interface PersonInput {
	email: string
	phoneNumber: string
}

export interface PersonEmail {
	address: string
	isVerified?: boolean
	verifiedDate?: string
}
export interface PersonPhone {
	number: string,
	isVerified?: boolean
	verifiedDate?: string
}
export interface Person {
	id: string
	type: string
	firstName: string
	lastName: string
	email?: PersonEmail
	phone?: PersonPhone
}

export interface AboutMeContextType {
	listCases: () => Promise<Case[]>
}

const notImplemented = () => { throw new Error('not implemented') }

const AboutMeContext = React.createContext<AboutMeContextType>({
	listCases: notImplemented
})

export default AboutMeContext
