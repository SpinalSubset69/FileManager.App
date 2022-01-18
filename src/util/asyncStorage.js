import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem(key, value){
    try{
        await AsyncStorage.setItem(key, value);
    }catch(e){
        throw new Error(e.message);
    }
}

async function getItem(key){
    try{
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            return value;
        }
        throw new Error('Key Not Found In Storage');
    }catch(e){
        throw new Error(e.message);
    }
}

export const localStorage ={
    setItem,
    getItem
}