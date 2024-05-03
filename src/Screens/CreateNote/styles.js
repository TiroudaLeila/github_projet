import { StyleSheet } from "react-native";


const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // paddingHorizontal: 10,
    },
    sauvegarder:{
        flex: 1,
        justifyContent:'flex-end',
        marginVertical: 20,
    },
    deconnexion:{
        flex: 1,
        justifyContent:'flex-end',
        marginVertical: 20,
        // backgroundColor: 'red'
    },
    save:{
        flex: 1,
        justifyContent:'flex-end',
        marginVertical: 40,
        
    },
    modifier:{
        flex: 1,
        justifyContent:'flex-end',
        marginVertical: 20,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 20,
    },
    inputsContainer: {
        marginTop: 60,
        borderRadius: 10,
        position: 'relative',
        backgroundColor: '#FFF',
        height: '70%',
        elevation: 4,
        borderBottomWidth: 2,
        borderColor: '#000',
    }
})
export default styless;