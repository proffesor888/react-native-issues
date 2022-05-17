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

export const getStorageItems = (onSuccess: Function):void => {
    const repo = CommunicationControllerInstance.getRepoName();
    CommunicationControllerInstance.getStorageItems(repo)
        .then(result => {
            if(result && result.issues) onSuccess(result.issues);
        })
}

export const removeFromBookmarks = (id: number, onSuccess: Function):void => {
    CommunicationControllerInstance.removeStorageItem(id)
        .then((result) => {
            if(!result) onSuccess(false)
        });
}
export const saveToBookmarks = (value: Issue, onSuccess: Function): void => {
    CommunicationControllerInstance.setStorageItem(value)
        .then((result) => {
            if(!result) onSuccess(true)
        });
}