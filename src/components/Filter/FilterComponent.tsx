import * as React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import {styles} from "./styles/Filter_styles";
import * as CONSTANTS from '../../model/issues.constants';


const FilterComponent:React.FC<FilterComponentProps> = ({filterIssues}) => {
    return(
        <View>
            <View>
                <Text style={styles.filter_title}>Filters</Text>
            </View>
            <View style={styles.filter_buttons_container}>
                <TouchableOpacity testID={'All'} onPress={() => filterIssues(CONSTANTS.DEFAULT_FILTER)} style={styles.filter_button}>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity testID={'Open'} onPress={() => filterIssues(CONSTANTS.OPEN_FILTER)} style={styles.filter_button}>
                    <Text>Open</Text>
                </TouchableOpacity>
                <TouchableOpacity testID={'Closed'} onPress={() => filterIssues(CONSTANTS.CLOSED_FILTER)} style={styles.filter_button}>
                    <Text>Closed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FilterComponent;