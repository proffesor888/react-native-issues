import * as React from "react";
import {useState} from "react";

export const useFormHook = (): {organization_name: string, repository_name: string, handleInputsChange: Function, error_message: string | null, handleError: Function} => {
    const [organization_name, set_organization_name] = React.useState<string>('');
    const [repository_name, set_repository_name] = React.useState<string>('');
    const [error_message, setErrorMessage] = React.useState<string | null>(null);
    const handleInputsChange = (text:string, type:string): void => {
        if(type === 'repo') {
            set_repository_name(text);
        } else {
            set_organization_name(text);
        }
    };
    const handleError = (error: string) => {
        setErrorMessage(error);
    }
    return {organization_name, repository_name, handleInputsChange, error_message, handleError};
}

export const useIssueListHook = (issues: Issue[]): {issuesList: Issue[], addIssues: Function, clearIssues: Function, setIssuesList: Function} => {
    const [issuesList = [], setIssuesList] = useState<Issue[]>(issues);
    const addIssues = (loadedIssues: Issue[]):void => {
        setIssuesList([...issuesList, ...loadedIssues]);
    }
    const clearIssues = ():void => {
        setIssuesList([]);
    }
    return {issuesList, addIssues, clearIssues, setIssuesList};
}