import * as React from 'react';
import {View, FlatList} from 'react-native';
import { BookmarkedScreenProps} from "../navigation/types/navigation_types";
import {useEffect, useState} from "react";
import CommunicationControllerInstance from "../api/CommunicationController";
import ListItemComponent from "../components/ListItem/ListItemComponent";
import {getStorageItems} from "../utils/helpers";

export const BookmarkedScreen:React.FC<BookmarkedScreenProps> = ({route, navigation}) => {
    const [bookmarkedIssues, setBookmarked] = useState<[] | Issue[]>([]);

    useEffect(() => {
        getStorageItems(setBookmarked);
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getStorageItems(setBookmarked);
        });
        return unsubscribe;
    }, [navigation]);

    const handleItemListSelection = <T extends Issue>(item: T): void => {
        navigation.navigate('IssueDetails', {issue: item, isBookmarked: true});
    }

    const renderItem = <T extends Issue>({item}: {item: T}) => {
        return (
            <ListItemComponent onItemClick={handleItemListSelection} item={item}/>
        )
    };
    return(
        <View style={{flex: 1}}>
            <FlatList
                testID={'list'}
                data={bookmarkedIssues}
                renderItem={renderItem}
            />
        </View>
    )
}