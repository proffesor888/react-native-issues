import * as React from 'react';
import type {IssuesDetailsScreenProps} from '../navigation/types/navigation_types';
import Details from "../components/Details/DetailsComponent";
import SwitchComponent from "../components/Switch/SwitchComponent";
import {useState} from "react";
import {getSwitchTitle, saveToBookmarks, removeFromBookmarks} from "../utils/helpers";
import {ScrollView} from 'react-native';

export const IssueDetailsScreen: React.FC<IssuesDetailsScreenProps> = ({route}) => {
    const {issue: {title, state, id, body, created_at, updated_at}} = route.params;
    const initialBookmarkState = !!route.params.isBookmarked;
    const [isBookmarked, setBookmark] = useState<boolean>(initialBookmarkState);
    const toggleBookmark = (): void => {
        const issue={title, state, id, body, created_at, updated_at};
        if(isBookmarked) {
            removeFromBookmarks(id, setBookmark);
        } else {
            saveToBookmarks(issue, setBookmark);
        }
    };
    return(
        <ScrollView style={{flex: 1}}>
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
        </ScrollView>
    )
};