import * as React from 'react';
import {View, Text} from "react-native";
import {styles} from "./styles/Details_style";


const Details:React.FC<DetailsProps> = ({title, state, id, body, created_at,updated_at}) => {
    return(
        <View style={styles.container}>
            <Text testID={'title'} style={styles.text}>{`Title: ${title}`}</Text>
            <Text testID={'state'} style={styles.text}>{`Status: ${state}`}</Text>
            <Text testID={'id'} style={styles.text}>{`Issue id: ${id}`}</Text>
            <Text testID={'details'} style={styles.text}>{`Details: ${body}`}</Text>
            <Text testID={'dates'} style={styles.text}>{`Dates: ${created_at} - ${updated_at}`}</Text>
        </View>
    )
}

export default Details;