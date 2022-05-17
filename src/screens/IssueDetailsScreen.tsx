import * as React from 'react';
import type {IssuesDetailsScreenProps} from '../navigation/types/navigation_types';
import Details from "../components/Details/DetailsComponent";
import SwitchComponent from "../components/Switch/SwitchComponent";
import {useState} from "react";
import CommunicationControllerInstance from "../api/CommunicationController";
import {getSwitchTitle} from "../utils/helpers";

export const IssueDetailsScreen: React.FC<IssuesDetailsScreenProps> = ({route}) => {
    const {issue: {title, state, id, body, created_at, updated_at}} = route.params;
    const initialBookmarkState = !!route.params.isBookmarked;

    const [isBookmarked, setBookmark] = useState<boolean>(initialBookmarkState);
    const toggleBookmark = (): void => {
        const issue={title, state, id, body, created_at, updated_at};
        saveToBookmarks(issue);
    };
    const saveToBookmarks = (value: Issue): void => {
        CommunicationControllerInstance.setStorageItem(value)
            .then((result) => {
                if(!result) setBookmark(true)
            });
    }
    return(
        <>
            <SwitchComponent
                title={getSwitchTitle(isBookmarked)}
                value={isBookmarked}
                toggle={toggleBookmark}
            />
            <Details
                title={title}
                state={state}
                id={id}
                body={body}
                created_at={created_at}
                updated_at={updated_at}
            />
        </>
    )
};