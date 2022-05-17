import React from "react";
import { View, Switch, Text } from "react-native";
import { styles } from "./styles/SwitchComponent_style";

const SwitchComponent: React.FC<SwitchComponentProps> = ({value, toggle, title}) => {
    return (
        <View style={styles.container}>
            <Switch
                testID={'switch'}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggle()}
                value={value}
                style={styles.switch}
            />
            <Text testID={'title'} style={styles.title}>{title}</Text>
        </View>
    );
}

export default SwitchComponent;