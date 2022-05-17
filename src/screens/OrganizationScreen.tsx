import * as React from 'react';
import OrganizationFormComponent from "../components/OrganizationForm/OrganizationFormComponent";
import type {OrganizationScreenProps} from '../navigation/types/navigation_types';
import CommunicationControllerInstance from '../api/CommunicationController';
import {useFormHook} from "../utils/hooks";
import {saveOrganization} from "../utils/helpers";


export const OrganizationScreen:React.FC<OrganizationScreenProps> = ({navigation}) => {
    const {organization_name, repository_name, handleInputsChange, handleError, error_message} = useFormHook();

    const navigateToIssueList = <T extends Issue>(list: T[]): void => {
        saveOrganization(organization_name, repository_name);
        handleError(null);
        navigation.navigate('TabNavigator', {
            screen: 'IssuesList',
            params: {issues: list}
        });
    }

    const fetchRepo = ():void => {
        CommunicationControllerInstance.fetchIssues(organization_name, repository_name, navigateToIssueList)
            .catch(e => handleError(e.toString()));
    }

    return (
            <OrganizationFormComponent
                orgName={organization_name}
                orgRepo={repository_name}
                handleInputsChange={handleInputsChange}
                submit={fetchRepo}
                error={error_message}
            />
    );
}