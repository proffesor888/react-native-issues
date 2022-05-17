import CommunicationControllerInstance from "../api/CommunicationController";

export const saveOrganization = (organization_name: string, repository_name: string): void => {
    CommunicationControllerInstance.setOrganizationName(organization_name);
    CommunicationControllerInstance.setRepoName(repository_name);
}

export const filterIssuesHandler = (filter: string, onSuccess: Function):void => {
    CommunicationControllerInstance.setFilter(filter);
    CommunicationControllerInstance.resetPage();
    CommunicationControllerInstance.fetchIssues(undefined, undefined, (issues: Issue[]) => onSuccess(issues));
}

export const loadNextPageHandler = (addIssues: Function):void => {
    const currentPage = CommunicationControllerInstance.getCurrentPage();
    CommunicationControllerInstance.setCurrentPage(currentPage + 1);
    CommunicationControllerInstance.fetchIssues(undefined, undefined, addIssues);
}

export const getSwitchTitle = (isBookmarked: boolean): string => {
    return isBookmarked ? "Bookmarked" : "Save to Bookmarks"
}