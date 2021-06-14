import React from "react";
import {View} from "react-native";

import {Searchbar} from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import theme from "../theme.js";


const RepositoryListHeader = ({orderByChange, searchKeyChange, orderByOptions, orderByValue, searchKey}) => {


    return (
        <View style={{backgroundColor: theme.colors.mainBackground}}>
            <Searchbar
                placeholder={"Search"}
                onChangeText={q=>searchKeyChange(q)}
                value={searchKey}
            />
            <Picker
                onValueChange={orderByChange}
                selectedValue={orderByValue}

            >{
                orderByOptions.map(item =>
                    <Picker.Item label={item.label} value={item.value} key={item.value}/>)
            }
            </Picker>
        </View>


    );
};


export default RepositoryListHeader;