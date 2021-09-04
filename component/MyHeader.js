import * as React from 'react';
import {Header, Icon, Badge} from 'react-native-elements';

const MyHeader = (props)=>{
    return(
        <Header
            leftComponent={
                <Icon
                    name="bars"
                    color="white"
                />
            }
            centerComponent={{
                text: "Time - Table",
                style: {color: "rgb(60, 225, 113)", fontSize: 25, fontWeight: "bold"}
            }}
        />
    );
}
export default MyHeader;